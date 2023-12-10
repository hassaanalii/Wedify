import {useState} from 'react';
import {Button, Provider as PaperProvider} from 'react-native-paper';
import DropShadow from 'react-native-drop-shadow';
import {signInWithEmailAndPassword} from 'firebase/auth';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

export default function AdminLogin2({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [IsSecureEntry, setIsSecureEntry] = useState(true);
  const [errortext, setErrortext] = useState("");
  const auth = FIREBASE_AUTH;

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const handleSubmitPress = () => {
    setErrortext("");
    if (!email) {
      alert("Please fill Email");
      return;
    }
    if (!password) {
      alert("Please fill Password");
      return;
    }
    
      signInWithEmailAndPassword(auth,email,password)
      .then((user) => {
        alert("Admin Login Successfully")
       
       navigation.replace("Admin Menu");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          alert("Invalid email. Please check your email and try again.");
        } else if (error.code === "auth/wrong-password") {
          alert("Invalid password. Please check your password and try again.");
        } else {
          alert("Login error. Please try again.");
        }
      });
          
      
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, width: wp('100%')}}
        source={require('../images/backgroundImg2.png')}>
        <View style={styles.sectionContainer}>
          <Text style={styles.Logintext}>Login</Text>

          <TextInput
            style={styles.InputEmail}
            placeholder="Email"
            value={email}
            onChangeText={text => handleCheckEmail(text)}
          />
          {checkValidEmail ? (
            <Text style={styles.textFailed}>Wrong format email</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
          <View style={styles.wrapperInput}>
            <View>
              <TextInput
                style={styles.InputPassword}
                placeholder="Password"
                value={password}
                secureTextEntry={IsSecureEntry}
                onChangeText={text => setPassword(text)}
              />
              <View style={{alignSelf: 'flex-end', marginRight: wp('6%')}}>
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry(prev => !prev);
                  }}>
                  <Text
                    style={{
                      fontFamily: 'DMSerifDisplay-Regular',
                      fontSize: 15,
                      color: '#9A2143',
                    }}>
                    {IsSecureEntry ? 'Show' : 'Hide'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <DropShadow style={styles.DropShadow}>
            {email == '' || password == '' || checkValidEmail == true ? (
              <Button style={styles.disableButton} onPress={handleSubmitPress}>
                <Text
                  style={{
                    fontSize: 22,
                    fontFamily: 'Montaga-Regular',
                    color: 'white',
                    lineHeight: 35 
                  }}>
                  Login
                </Text>
              </Button>
            ) : (
              <Button
                onPress={handleSubmitPress}
                style={styles.loginButton}
                buttonColor="#9A2143"
                textColor="white">
                <Text
                  style={{fontSize: 20, fontFamily: 'DMSerifDisplay-Regular'}}>
                  Login
                </Text>
              </Button>
            )}
          </DropShadow>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Logintext: {
    borderWidth: 3,
    borderColor: '#FBF8F2',
    fontSize: 60,
    color: '#BFA054',
    fontFamily: 'DMSerifDisplay-Regular',
    alignSelf: 'center',
    marginBottom: hp('9%'),
    marginRight: wp('1%'),
  },
  InputEmail: {
    borderWidth: 2,
    width: wp('60%'),
    height: hp('6%'),
    marginBottom: hp('1%'),
    alignSelf: 'center',
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 15,
    fontSize: 18,
    borderColor: '#9A2143',
    fontFamily: 'Montaga-Regular',
  },
  InputPassword: {
    flexDirection: 'row',
    borderWidth: 2,
    width: wp('60%'),
    height: hp('6%'),
    alignSelf: 'center',
    marginBottom: hp('-4%'),
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 15,
    fontSize: 18,
    fontFamily: 'Montaga-Regular',
    borderColor: '#9A2143',
  },
  wrapperInput: {
    flexDirection: 'row',
   marginBottom: hp('10%'), 
  },
  disableButton: {
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderRadius: 0,
    width: wp('30%'),
    height: hp('6%'),
    marginBottom: hp('15%'),
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#BFA054',
  },
  loginButton: {
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderRadius: 0,
    width: wp('30%'),
    height: hp('6%'),
    marginBottom: hp('5%'),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  DropShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5.27,
    elevation: 5,
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
    marginBottom: hp('2%'),
    marginRight: wp('6%'),
    fontFamily: 'Montaga-Regular',
  },
});
