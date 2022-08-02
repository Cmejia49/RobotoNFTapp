
import React from 'react';
import { StyleSheet, Text, View ,StatusBar,useColorScheme} from 'react-native';
import { NavigationContainer,DefaultTheme,  DarkTheme,  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



import Home from './components/Home.js';
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';
import Services from './components/Services.js';
const drawer = createDrawerNavigator();
export default class App extends React.Component {
  
  render() {
    return (
      <NavigationContainer>
        <drawer.Navigator initialRouteName="Home"
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#0C0C0C',
              width: 240,
            },
            drawerLabelStyle:{
              color:'white'
            },          
          }}>
          <drawer.Screen name="Home"
          component={Home}    
          options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#0C0C0C',
          },
          
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
           }} />

          <drawer.Screen name="About" component={About} 
            options={{
              title: 'About',
              headerStyle: {
                backgroundColor: '#0C0C0C',
              },
              
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}/>

          <drawer.Screen name="Gallery" component={Gallery} 
            options={{
              title: 'Gallery',
              headerStyle: {
                backgroundColor: '#0C0C0C',
              },
              
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}/>

          <drawer.Screen name="Contact" component={Contact} 
            options={{
              title: 'Contact',
              headerStyle: {
                backgroundColor: '#0C0C0C',
              },
              
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}/>

          <drawer.Screen name="Services" component={Services} 
            options={{
              title: 'Services',
              headerStyle: {
                backgroundColor: '#0C0C0C',
              },
              
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}/>
        </drawer.Navigator>
      </NavigationContainer>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  try:{
    color:'white'
  }
});