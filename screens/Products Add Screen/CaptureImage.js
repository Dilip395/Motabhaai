import * as React from 'react';
import {View, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

export default function CaptureImage ({route}){
    const navigation = useNavigation();
    const {photo} = route.params;
    const handleSave = async(photo)=>{
        const {status} =await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if(status === 'granted'){
          const assert = await MediaLibrary.createAssetAsync(photo);
          MediaLibrary.createAlbumAsync('Products', assert);
        }else{
          console.log('Oh You Missed to give Permission')
        }
      }

    return(
     <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <View style ={{
        borderStyle: 'dotted',
        borderWidth: 2, 
        borderRadius: 2,
        alignItems:'center',
        justifyContent:'center',
        padding:2
        }}>
       <Image
           source={{ uri:photo.uri}}
           style={{width:380, height:480, alignItems:'center', justifyContent:'center'}}
        /> 
        
        </View>
        <View style={{flexDirection: "row", alignItems:'center', justifyContent:'center', marginTop:'10%',}}>
        <Button
        title="Cancel"
        disabled
        onPress={() => {}}
         />
       <Button
        title="Done"
        color="rgb(44,69,99)"
       // onPress={() => navigation.navigate('ViewProductss',{'photo':photo})}
        onPress={async () => {
           // if (cameraRef) {
             //let photo = await cameraRef.takePictureAsync('photo');
           //  console.log('photo', photo);
             navigation.navigate('ViewProductss',{'photo':photo});
             props.setModalVisible();
            const source = photo.uri;
            if(source){
              handleSave(source);
            }
          //  }
          }}
        />
        </View>
    </View>

    );
}