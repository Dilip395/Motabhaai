import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList,Button} from 'react-native';


export default function ViewProducts ({route,navigation}){
    const {photo} = route.params;
  
    return(
      <View style={{flex:1, backgroundColor:'rgb(244,245,250)'}}>
      <ScrollView>
       <TouchableOpacity
       style={styles.button}
       onPress={() =>navigation.navigate('UploadProductImage')}
       >
        <Text style={styles.text}>Add Product Images</Text>
        </TouchableOpacity>
        </ScrollView>
        <Image
           source={{uri:photo.uri, isStatic:true}}
           style={{width:160, height:160, justifyContent:'flex-start', position:'absolute', marginTop:'20%'}}
        />  
       <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center', padding:50,}}>
       <Button
        title="Previous"
        disabled
        onPress={() => {}}
         />
       <Button
        title="Next"
        
        color="rgb(44,69,99)"
        onPress={() =>{}}
        />
       </View>
       </View>
           
        );
};

const styles =StyleSheet.create({
    text:{
        fontSize:20,
        textAlign:'center'
    },
    button: {
      backgroundColor: "#DDDDDD",
      padding: 10,
      margin:30,
    }
    
    });
    

