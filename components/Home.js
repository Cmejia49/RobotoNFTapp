import React from 'react';
import { Button, View, Text, Image, StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const image = { uri: "https://robohash.org/static/img/page_bground.jpg" };
export default class Home extends React.Component {

    static navigationOptions = {
      drawerLabel: 'Home'
    };
  
    render() {
      return (
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.bgImage}>
          <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>Get Your Robot NFT Now</Text>
          </View>
          <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={{uri: 'https://robohash.org/GOK.png?set=set1'}}
          />
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.textDesc}>Welcome To Robot NFT Collection{"\n"}
           Here you can see all the Robot NFT {"\n"}
                  Create by chris{"\n"}
          </Text>
          </View>
          <View style={styles.btnContainer}>
            
          <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={() =>
            this.props.navigation.navigate('Gallery', { name: 'Gallery' })
          }
       > 
            <Text style={styles.TextStyle}> Get Now </Text>
            
      </TouchableOpacity>
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
      justifyContent:'space-evenly',
      backg:'#25262B'
    },
    headerContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-start',
      paddingBottom:20,
      margin:20,
      paddingTop:30,
    },

    btnContainer:{
      flex:1,
      alignItems:'stretch',
      justifyContent:'center',
      marginHorizontal: 16,
      paddingTop:20,
      paddingBottom:30
    },

    logoContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-end'
    },

    logo: {
      width: 250,
      height: 250,
    },
    textContainer:{
      flex: 1,
      alignItems:'center',
      justifyContent:'flex-end',
      marginHorizontal: 16,
    },
    bgImage: {
      flex:3,
      alignItems:'stretch',
      justifyContent:'center'
    },
    heading: {
      marginHorizontal:8,
        marginTop: 40
      
    },
    textHeader: {
      color: "#F9EC31",
      fontSize: 24,
      textAlign: "center",
      margin: 10,
      fontFamily:"RobotoBold"
    },
    textDesc:{
      color: "#FFFFFF",
      fontSize: 18,
      textAlign: "center",
      margin: 10,
      fontFamily:'helvetica'
    },
    SubmitButtonStyle:{
 
      marginRight: 40,
  marginLeft: 40,
  marginTop: 10,
  paddingTop: 20,
  paddingBottom: 20,
  backgroundColor: '#7a42f4',
  borderRadius: 30,
  borderWidth: 1,
  borderColor: '#7a42f4',
    },
   
    TextStyle:{
        color:'#fff',
        textAlign:'center',
    },

    buttonGPlusStyle: {
      position:'relative',
      alignItems:'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#dc4e41',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonFacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#485a96',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
    buttonImageIconStyle: {

      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },
    buttonTextStyle: {

      color: '#fff',
      marginBottom: 2,
      marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
      backgroundColor: '#fff',
      height: 40,
    },
  });
  
