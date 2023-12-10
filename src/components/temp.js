import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gpa, setGpa] = useState('');
  const [regNo, setRegNo] = useState('');

  const saveRecord = async () => {
  if (!regNo || !gpa) {
    Alert.alert('Error', 'Reg No and GPA fields must not be empty');
    return;
  }
  try {
    const studentRecord = { name, age, gpa, regNo };
    const uniqueKey = `studentRecord_${regNo}`;
    await AsyncStorage.setItem(uniqueKey, JSON.stringify(studentRecord));
    Alert.alert('Success', 'Record saved successfully');
  } catch (error) {
    Alert.alert('Error', 'An error occurred while saving the record');
  }
};

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Name" onChangeText={setName} value={name} />
      <TextInput style={styles.input} placeholder="Age" onChangeText={setAge} value={age} />
      <TextInput style={styles.input} placeholder="GPA" onChangeText={setGpa} value={gpa} />
      <TextInput style={styles.input} placeholder="Reg No" onChangeText={setRegNo} value={regNo} />
      <TouchableOpacity style={styles.button} onPress={saveRecord}>
        <Text style={styles.buttonText}>Save Record</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2')}>
        <Text style={styles.buttonText}>Go to Screen2</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen2 = () => {
  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const recordKeys = keys.filter((key) => key.startsWith('studentRecord_'));
      const recordObjects = await AsyncStorage.multiGet(recordKeys);
      const storedRecords = recordObjects.map(([key, value]) => JSON.parse(value));
      setRecords(storedRecords);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while retrieving the records');
    }
  };

  const removeRecord = async (regNo) => {
    try {
      const uniqueKey = `studentRecord_${regNo}`;
      await AsyncStorage.removeItem(uniqueKey);
      await getRecords();
    } catch (error) {
      Alert.alert('Error', 'An error occurred while removing the record');
    }
  };

  React.useEffect(() => {
    getRecords();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        renderItem={({ item, index }) => (
          <View style={styles.record}>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>GPA: {item.gpa}</Text>
            <Text>Reg No: {item.regNo}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeRecord(index)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.regNo}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: 'App Name' }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
  },
  record: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: '#f44336',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -10,
    right: -10,
  },
});