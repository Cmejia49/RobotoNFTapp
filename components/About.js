// Aboutscreen.js
import React from 'react';
import { Button, View, Text,StyleSheet, ImageBackground,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from '@react-navigation/native';

const image = { uri: "https://robohash.org/static/img/page_bground.jpg" };
export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.bgImage}>
       <View style={styles.logoContainer}>
       <Image
          style={styles.logo}
          source={{uri: 'https://robohash.org/GOK.png?set=set1'}}
          />
       </View>
       <View style={styles.textContainer}>
         <Text style={styles.text}>This App contain Robot NFT collection Created By Chris
         </Text>
       </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignContent:'center',
   justifyContent:'center',
   backgroundColor:'#FFFFFF'
 },
 bgImage: {
  flex:3,
  alignItems:'stretch',
  justifyContent:'center'
},

logoContainer:{
  flex:1,
  alignItems:'center',
  justifyContent:'flex-start'
},
logo: {
  width: 250,
  height: 250,
},

textContainer:{
  flex:1,
  alignItems:'center',
  justifyContent:'flex-start'
},
text:{
  color: "#FFFFFF",
      fontSize: 18,
      textAlign: "center",
      margin: 10,
}
});