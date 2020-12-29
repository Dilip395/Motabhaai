import React,{ useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity,Modal,} from 'react-native';
import { IconButton } from 'react-native-paper';
import { Camera } from 'expo-camera';
import {useNavigation} from '@react-navigation/native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

export default function UploadProductImage (){
  const [camera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState();

 useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <View style = {styles.container}>
      <IconButton
      icon="camera"
      size={30}
      onPress={()=>{setShowCamera(true);}} >
      </IconButton>
    <Text style = {styles.text}>Tap to upload products image</Text>  
    {camera && (
        <CameraModule
          showModal={camera}
          setModalVisible={() => setShowCamera(false)}
          setImage={(result) => setImage(result.uri)}
        />
      )}
     </View>
     <View style={{flexDirection: "row",alignItems:'center',justifyContent:'center',marginTop:'25%'}}>
     <Button
        title="Cancel"
        color="rgb(44,69,99)"
        onPress={() => {}}
      />
       <Button
        title="Done"
        disabled
        onPress={() => {}}
      />
      </View>
     </View>
  );

}
function CameraModule (props) {
  const navigation = useNavigation();
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  // const handleSave = async(photo)=>{
  //   const {status} =await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //   if(status === 'granted'){
  //     const assert = await MediaLibrary.createAssetAsync(photo);
  //     MediaLibrary.createAlbumAsync('Products', assert);
  //   }else{
  //     console.log('Oh You Missed to give Permission')
  //   }
  // } 

return (

   <Modal
     animationType="slide"
     transparent={true}
     visible={true}
     onRequestClose={() => {
       props.setModalVisible();
     }}
   >
     <Camera
       style={{ flex: 1,  marginTop:'40%',
       justifyContent: 'space-between',
       marginLeft:'1%',
       marginRight:'1%',
       marginBottom:'59%',
       borderStyle: 'dotted', 
       borderWidth: 2, 
       borderRadius: 2,
       padding:10 }}
       flashMode={Camera.Constants.FlashMode.on}
       type={type}
       ref={(ref) => {
         setCameraRef(ref);
       }}
     >
       <View
         style={{
           flex: 1,
           backgroundColor: "transparent",
           justifyContent: "flex-end",
         }}
       >
         <View
           style={{
             backgroundColor: 'transparent',
             flexDirection: "row",
             alignItems: "center",
             justifyContent: 'space-between',
             height:50
           }}
         >
           <IconButton
             icon="close"
             style={{ marginLeft: 12 }}
             mode="outlined"
             color="white"
             onPress={() => {
             props.setModalVisible();
             }}
           >
           </IconButton>
          <TouchableOpacity
             onPress={async () => {
               if (cameraRef) {
                let photo = await cameraRef.takePictureAsync('photo');
              //  console.log('photo', photo);
                navigation.navigate('CaptureImage',{'photo':photo});
                props.setModalVisible();
              //  const source = photo.uri;
              //  if(source){
              //    handleSave(source);
              //  }
               }
             }}
           >
             <View
               style={{
                 borderWidth: 2,
                 borderRadius: 50,
                 borderColor: "white",
                 height: 50,
                 width: 50,
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 marginBottom: 16,
                 marginTop: 16,
               }}
             >
               <View
                 style={{
                   borderWidth: 2,
                   borderRadius: 50,
                   borderColor: "white",
                   height: 40,
                   width: 40,
                   backgroundColor: "white",
                 }}
               ></View>
             </View>
           </TouchableOpacity>
      <IconButton
             icon="axis-z-rotate-clockwise"
             style={{ marginRight: 12 }}
             mode="outlined"
             color="white"
             onPress={() => {
               setType(
                 type === Camera.Constants.Type.back
                   ? Camera.Constants.Type.front
                   : Camera.Constants.Type.back
               );
             }}
           >
          {type === Camera.Constants.Type.back ? "Front" : "Back "}
           </IconButton>
         </View>
       </View>
     </Camera>
   </Modal>
 );
};
const styles =StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        borderStyle: 'dotted', 
        borderWidth: 2, 
        borderRadius: 1,
        padding:'35%'
      
      },
      text:{
       fontSize:20,
      },
});
