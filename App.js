import { View, Text, Image } from 'react-native'
import React from 'react'
import LandingPage from './src/components/LandingPage'
import SignUpUser from './src/components/SignUpUser'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/HomeScreen';
import SettingsScreen from './src/components/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import AddScreenTwo from './src/components/AddScreenTwo';
import Dashboard from './src/components/Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminLogin2 from './src/components/AdminLogin2';
import UserLogin from './src/components/UserLogin';
import Forgotpassword from './src/components/forgotpassword';
import AdminMenu from './src/components/AdminMenu';
import Addemployees from './src/components/addemployees';
import ViewEmployees from './src/components/ViewEmployees';
import Updateemployees from './src/components/updateemployees';
import Addvenue from './src/components/addvenue';
import Updatevenue from './src/components/updatevenue';
import ViewVenues from './src/components/ViewVenues';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeName = "Home";
const settingsName = "Add";
const screen2 = "AddScreenTwo";
const dashboard = "Dashboard";

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        screenOptions:{

              "tabBarActiveTintColor": "#9A2143",
            "tabBarInactiveTintColor": "grey",
            "tabBarLabelStyle": {
              "fontSize": 14
            },
            "tabBarItemStyle": {
              "height": 50
            },
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]

        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = 'h1.png';
            tabBarLabel:"Home"
            return <Image source={require(`./src/images/h1.png`)} style={{width: 30, height: 30}} />;
          } else if (rn === settingsName) {
            iconName = 'add1.png'
            tabBarLabel:"Add"
            return <Image source={require(`./src/images/add1.png`)} style={{width: 30, height: 30}} />;
          // } else if (rn === screen2) {
          //   iconName = focused ? 'settings' : 'settings-outline';
          // }
          }else if (rn === dashboard) {
            iconName = 'dash1.png'
            tabBarLabel:"Dashboard"
            return <Image source={require(`./src/images/dash1.png`)} style={{width: 30, height: 30}} />;
          }

          // You can return any component that you like here!
          
        },
        
      })}
      // tabBarOptions={{
      //   activeTintColor: '#9A2143',
      //   inactiveTintColor: 'grey',
      //   labelStyle: { fontSize: 14 },
      //   tabStyle: { height: 50 },
      // }}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
      <Tab.Screen name={dashboard} component={Dashboard} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing Page" component={LandingPage} />
        <Stack.Screen name="Admin Login" component={AdminLogin2} />
        <Stack.Screen name="User Login" component={UserLogin} />
        <Stack.Screen name="User Signup" component={SignUpUser} />
        <Stack.Screen name="Forgot" component={Forgotpassword} />
        <Stack.Screen name="Admin Menu" component={AdminMenu} />
        <Stack.Screen name="Add Employee" component={Addemployees} />
        <Stack.Screen name="View Employees" component={ViewEmployees} />
        <Stack.Screen name="Update Employees" component={Updateemployees} />
        <Stack.Screen name="Add Venue" component={Addvenue} />
        <Stack.Screen name="Update Venue" component={Updatevenue} />
        <Stack.Screen name="View Venues" component={ViewVenues} />
        <Stack.Screen name="Homie" component={HomeTabNavigator} />
        <Stack.Screen name="Add2" component={AddScreenTwo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
