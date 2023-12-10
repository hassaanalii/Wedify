import { View, Text, Image, Dimensions, ScrollView, StyleSheet, Pressable } from 'react-native';
import React from 'react';

import Venue from './Venue';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ViewVenues = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../images/venueback2.png')} />
      <Image style={styles.backgroundImage2} source={require('../images/venueBack3.png')} />
      <View style={{display:"flex", marginTop:5, alignItems:"flex-start"}}>
                      <Pressable onPress={()=>{navigation.navigate("Admin Menu")}}>
                          <Image source={require("../images/backbutton.png")}/>   
                      </Pressable>
                  </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>View Venues</Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {/* <Venue props={{title:"Events Marquee", location:"Main Islamabad Expy, Islamabad, Islamabad Capital Territory 46000", capacity:"Capacity: 800", price:"200k Rs", img:require("../images/events.png")}}     /> */}
          <Venue title="Orchid Marquee" location="Wild Life Park Road, Islamabad, 44000" capacity="Capacity: 500" price="100k Rs" img={require("../images/marquee1.jpg")} />
          <Venue title="Events Marquee" location="Main Islamabad Expy, Islamabad, Islamabad Capital Territory 46000" capacity="Capacity: 1000" price="200k Rs" img={require("../images/events.png")} />

        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {

    width: '100%',
    position: 'absolute',
  },
  backgroundImage2: {
    width: '100%',
    position: 'absolute',
    marginTop: height * 0.2,
    height: "100%",
  },
  titleContainer: {
    width: '100%',
    position: 'absolute',
    marginTop: height * 0.255,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'DMSerifDisplay-Regular',
    color: '#9A2143',
  },
  scrollViewContainer: {
    
    position: 'absolute',
    marginTop: height * 0.255 + 70,
    marginLeft: width * 0.1,
    width: '100%',
    height: '80%', // Adjust the height to match the area covered by the second background image
  },
  scrollViewContent: {
    paddingBottom: height * 0.2, // Add bottom padding to stay within the bounds of the second background image
  },
});

export default ViewVenues;
