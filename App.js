import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import MainTabScreen from './screens/Products Screen/MainTabScreen';
import AddProduct from './screens/Products Add Screen/AddProduct';
import ProductBarcodeScanner from './screens/Products Add Screen/ProductBarcodeScanner';
import UploadProductImage from './screens/Products Add Screen/UploadProductImage';
import CaptureImage from './screens/Products Add Screen/CaptureImage';
// import ViewProducts from './screens/Products Add Screen/ViewProducts';
 import ViewProductss from './screens/Products Add Screen/ViewProductss';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Add Products" component={AddProduct} />
      <Stack.Screen name="ProductBarcodeScanner" component={ProductBarcodeScanner} />
      <Stack.Screen name="UploadProductImage" component={UploadProductImage} />
      <Stack.Screen name="CaptureImage" component={CaptureImage} />
      {/* <Stack.Screen name="ViewProducts" component={ViewProducts} /> */}
      <Stack.Screen name="ViewProductss" component={ViewProductss} /> 
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="Products Add" component={Root} />
      </Drawer.Navigator>

    </NavigationContainer>
    
  );
}

export default App;