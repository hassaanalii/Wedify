import { View, Text, Dimensions, StyleSheet,Image, Modal, TouchableOpacity , ScrollView,TextInput, Alert} from 'react-native'
import React, {useState} from 'react'

import Venue from './Venue';
import Decor from './Decor';

const width=  Dimensions.get('window').width
const height= Dimensions.get('window').height

const AddScreenTwo = ({navigation}) => {
  const pres = () =>{
    Alert.alert("Your Event has been booked!")
    navigation.navigate("Homie")
  }

  return (
    <ScrollView>
    <View style={{backgroundColor:"white"}}>
      <Image
          source={require('../images/backgroundImg4.png')} 
          style={styles.image}
        />
      <View style={styles.first}>
        <Text style={styles.firstT}>REGISTER</Text>
      </View>


      <View style={styles.s}>   
          <View style={styles.second}>
            <View style={{display:"flex", gap:height*0.03}}>
                <Text style={{fontSize:24, fontFamily:"DMSerifDisplay-Regular", color:"black"}}>Pick Your Venue</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Venue title={"Events Marquee"} location={"Main Islamabad Expy, Islamabad, Islamabad Capital Territory 46000"} capacity={"Capacity: 800"} price={"200k Rs"} img={require("../images/events.png")}/>
                    <Venue title={"Orchid Marquee"} location={"Wild Life Park Road, Islamabad, 44000"} capacity={"Capacity: 500"} price={"100k Rs"} img={require("../images/marquee1.jpg")} />
                </ScrollView>
            </View>
            <View style={{display:"flex", gap:height*0.03}}>
                <Text style={{fontSize:24, fontFamily:"DMSerifDisplay-Regular", color:"black"}}>Pick Your Decor</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Decor title={"Pick 1"} price={"50k Rs"} img={require("../images/decor1.png")}/>
                    <Decor title={"Pick 2"} price={"100k Rs"} img={require("../images/decor2.png")} />
                </ScrollView>
            </View>
            <View style={{display:"flex", gap:height*0.03}}>
                <Text style={{fontSize:24, fontFamily:"DMSerifDisplay-Regular", color:"black"}}>Budget</Text>
                <View style={{backgroundColor:"#FBF8F2", height:height*0.24, borderRadius:width*0.1, display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <View style={{justifyContent:"space-evenly", gap:height*0.01, display:"flex",flexDirection:"row"}}>
                      <View style={{gap:height*0.015}}>
                          <Text style={{fontSize:18, color:"black",fontFamily:"DMSerifDisplay-Regular"}}>Food Per Person:</Text>
                          <Text   style={{fontSize:18, color:"black",fontFamily:"DMSerifDisplay-Regular"}}>Number of Guests:</Text>
                          <Text  style={{fontSize:18, color:"black",fontFamily:"DMSerifDisplay-Regular"}}>Venue:</Text>
                          <Text  style={{fontSize:18, color:"black",fontFamily:"DMSerifDisplay-Regular"}}>Decor:</Text>
                          <Text  style={{fontSize:18, color:"black",fontFamily:"DMSerifDisplay-Regular"}}>Total:</Text>
                      </View>
                      <View style={{gap:height*0.01}}>
                            <Text style={{fontSize:20.77, color:"#BFA054",fontFamily:"DMSerifDisplay-Regular", marginLeft:width*0.3}}>220k</Text>
                            <Text style={{fontSize:20.77, color:"#BFA054",fontFamily:"DMSerifDisplay-Regular", marginLeft:width*0.3}}>220k</Text>
                            <Text style={{fontSize:20.77, color:"#BFA054",fontFamily:"DMSerifDisplay-Regular", marginLeft:width*0.3}}>220k</Text>

                            <Text style={{fontSize:20.77, color:"#BFA054",fontFamily:"DMSerifDisplay-Regular", marginLeft:width*0.3}}>220k</Text>
                            <Text style={{fontSize:20.77, color:"green",fontFamily:"DMSerifDisplay-Regular", marginLeft:width*0.3}}>220k</Text>


                      </View>
                   
                    </View>
                </View>
            </View>
            <View style={{width:"100%", alignItems:"center", marginBottom:height*0.05}}>
            <TouchableOpacity onPress={pres} style={styles.but1}>
                <Text style={styles.text3}>Confirm!</Text>
            </TouchableOpacity>
            </View>

          </View>
           
      </View>
    </View>
    </ScrollView>
  )
  
}

const styles = StyleSheet.create({
  image:{
    width:"100%"
    
    
  },
  first:{
    position:'absolute',
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    
    width:"100%", marginTop:height*0.02
  },
  firstT:{
    textAlign:"center",
    fontSize:20,
    fontFamily:"DMSerifDisplay-Regular",
    color:"#BFA054",
    letterSpacing:width*0.02,
    textShadowOffset: { width: 0, height: 2},
    textShadowRadius: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  but1:{
    backgroundColor:"#9A2143",
    borderWidth:1,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    width:width*0.35,
    height:height*0.05,
    alignItems:"center",
    justifyContent:"center"

  },
  text5:{
    fontSize:16, color:"white",
    fontFamily:"DMSerifDisplay-Regular", textAlign:"center"
  },
  second:{

    width:"90%",
    justifyContent:"space-between",
    gap:height*0.05

    
  },
  s:{
    display:"flex",
    alignItems:"center"
  },
  input:{
    borderWidth:1,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderColor:"#9A2143",
    width: "100%",
    fontFamily:"Montaga-Regular",
    fontSize:16,
    paddingLeft:width*0.05
  },
  but1:{
    backgroundColor:"#9A2143",
    borderWidth:1,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    width:width*0.35,
    height:height*0.05,
    alignItems:"center",
    justifyContent:"center"

  }
  ,
  text3:{
    fontSize:17,
    fontFamily:"DMSerifDisplay-Regular",
    color:"white"
  },
  
})

export default AddScreenTwo