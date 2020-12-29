import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions,Button,} from 'react-native';

const {width} = Dimensions.get('screen');

export default function AddProduct({navigation}){
    const leftTop={ 
        borderLeftWidth:3,
        borderTopWidth:3,
        borderColor:'white'
    };
    const leftBottom={
        borderLeftWidth:3,
        borderBottomWidth:3,
        borderColor:'white'
    };
    const rightTop={
        borderRightWidth:3,
        borderTopWidth:3,
        borderColor:'white'
    };
    const rightBottom={
        borderRightWidth:3,
        borderBottomWidth:3,
        borderColor:'white'
    };


        return(
            <View style={{flex:1, backgroundColor:'rgb(244,245,250)'}}>
            <View>
           <TouchableOpacity 
           style={styles.button}
           onPress={() => navigation.navigate('UploadProductImage')}>
            <Text style={styles.text}>Add Product Images</Text>
          </TouchableOpacity>
            <Text style={styles.text}>OR</Text>
            </View>
            <View style={{flax:1, backgroundColor:'rgb(39,25,25)', marginTop:20}} >
            <View style={{margin:150,alignItems:'center', justifyContent:'center'}}>
            <View style={{width:width/2, height:width/2,}}>
            <View style={{flex:1, flexDirection:'row'}}>
                <View style={{flex:1, ...leftTop}}/>
                <View style={{flex:1}}/>
                <View style={{flex:1,  ...rightTop}}/>
            </View>
            <View style={{flex:1}} />
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1,...leftBottom}}/>
                <View style={{flex:1}}/>
                <View style={{flex:1, ...rightBottom}}/>
            </View>
            </View>
            </View>
            <TouchableOpacity 
           style={styles.qrscan}
           onPress={() => navigation.navigate('ProductBarcodeScanner')}>
            <Text style={styles.text}>Scan Barcode</Text>
          </TouchableOpacity>
            </View>
           </View>
           
        );
}

const styles =StyleSheet.create({
text:{
    fontSize:20,
    textAlign:'center'
},
button: {
  backgroundColor: "#DDDDDD",
  padding: 10,
  margin:30,
},
qrscan:{
  backgroundColor: "#DDDDDD",
  padding: 8,
  margin:20, 
},

});
