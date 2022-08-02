// Gallery.js
import React,{useEffect,useState} from 'react';
import { Dimensions,Button, View, Text,StyleSheet, ImageBackground,Image,FlatList,ActivityIndicator} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from '@react-navigation/native';

const image = { uri: "https://robohash.org/static/img/page_bground.jpg" };

const  DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      imageUrl: 'https://robohash.org/ewan',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      imageUrl: 'https://robohash.org/panget',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      imageUrl: 'https://robohash.org/sad',
    },
    {
        id: '35c8694a0f-3da1-471f-bd96-145571e29d72',
        imageUrl: 'https://robohash.org/N18.png?set=set1&size=150x150',
      },
      {
        id: '2s8694a0f-3da1-471f-bd96-145571e29d72',
        imageUrl: 'https://robohash.org/YV5.png?set=set1&size=150x150',
      },
      {
        id: '1A8694a0f-3da1-471f-bd96-145571e29d72',
        imageUrl: 'https://robohash.org/IS5.png?set=set1&size=150x150',
      },
      {
        id: '9Z8694a0f-3da1-471f-bd96-145571e29d72',
        imageUrl: 'https://robohash.org/27.115.124.66.png',
      },
      {
        id: '8m608694a0f-3da1-471f-bd96-145571e29d72',
        imageUrl: 'https://robohash.org/ty',
      },
  ];
export default class Gallery extends React.Component {

         

  render() {
      const data =DATA
    return (
        <View style={styles.container}>
              <ImageBackground source={image} style={styles.bgImage}>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            numColumns={2}
            renderItem={({ item }) => (
            <View>
             <Image style={styles.image} source={{uri: item.imageUrl}} />
             </View>
            )}
          />
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
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    image: {
        width: (Dimensions.get('window').width / 2) - 20,
        height: 150,
        margin: 10,
        },

        bgImage: {
            flex:3,
            alignItems:'stretch',
            justifyContent:'center'
          },
  });