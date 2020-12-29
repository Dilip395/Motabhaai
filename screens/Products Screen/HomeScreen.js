import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';

function HomeScreen ({navigation}){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  <Text>Home Screen</Text>
  <Button 
  title="Go Back"
  onPress={()=>navigation.goBack()}
  />
  <Button 
  title="Go to Product Screen"
  onPress={()=>navigation.navigate("Products")}
  />
      </View>
    )
  }

export default HomeScreen
