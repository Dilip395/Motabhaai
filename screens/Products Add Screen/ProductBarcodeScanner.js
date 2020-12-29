import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions,Button,} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const {width} =Dimensions.get('screen');


 function ProductBarcodeScanner (){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
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
            <View style={{flax:1, backgroundColor:'rgb(169,163,163)',height:'100%'}} >
            <View style={{ margin:150,alignItems:'center', justifyContent:'center'}}>
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
            <BarCodeScanner
             onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
             style={StyleSheet.absoluteFill}
             />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
            </View>
            <TouchableOpacity 
           style={styles.qrscan}
           onPress={()=>{}}>
            <Text style={styles.text}>Tab the Barcode to focus</Text>
          </TouchableOpacity>
            </View>
           
        );
}

const styles =StyleSheet.create({
text:{
    fontSize:20,
    textAlign:'center',
    color:'white'
    
},
qrscan:{
    backgroundColor:'rgb(0,0,0)',
    padding: 10,
    margin:40,
},

});

export default ProductBarcodeScanner;