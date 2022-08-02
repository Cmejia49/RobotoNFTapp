import React from 'react';
import { Button, View, Text, Image, StyleSheet,TextInput,ImageBackground,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from '@react-navigation/native';
const image = { uri: "https://robohash.org/static/img/page_bground.jpg" };
export default class Contact extends React.Component {
    state = {
        name:'',
     }
     handleName = (text) => {
        this.setState({ name: text })
     }

    send =(name)=>{alert(name + ' Succesfull send Message')}
    render() {
        return (
          <View style={styles.container}>
            <ImageBackground source={image} style={styles.bgImage}>
                <View style={styles.formContainer}>
                    
                    <Text style={styles.text}>Your Name</Text>
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    onChangeText = {this.handleName}/>
 
                    <Text style={styles.text}>Your Email</Text>
                    <TextInput style = {styles.input}/>

                    <Text style={styles.text}>Your Subject</Text>
                    <TextInput style = {styles.input}/>

                    <Text style={styles.text}>Your Message</Text>
                    <TextInput style = {styles.input}/>
                </View>

                <View style={styles.btnContainer}>
                 <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity = { .5 }
                  onPress = {
                    () => this.send(this.state.name)
                 }>
 
                <Text style={styles.TextStyle}>Send Message</Text>
            
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
   bgImage: {
    flex:3,
    alignItems:'stretch',
    justifyContent:'center'
  },
  formContainer:{
    flex:1,
    justifyContent:'flex-start',
    paddingBottom:20,
    margin:20,
    paddingTop:30,
  },
  text:{
    color:'#fff',
    fontSize: 18,
    fontFamily:"Oxygen-Regular"
  },
  input: {
    color:'#fff',
    height: 40,
    marginTop:10,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 btnContainer:{
    flex:1,
    alignItems:'stretch',
    justifyContent:'center',
    marginHorizontal: 16,
    paddingTop:20,
    paddingBottom:30
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
borderColor:'#7a42f4',
  },
  TextStyle:{
    color:'#fff',
    textAlign:'center',
},
})
  