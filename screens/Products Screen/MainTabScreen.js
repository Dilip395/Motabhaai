import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';
const HomeStack = createStackNavigator();
const ProductsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () =>(
    <Tab.Navigator
    initialRouteName="Products"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'HomeScreen',
        tabBarColor:'#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Products"
      component={ProductStackScreen}
      options={{
        tabBarLabel: 'Product',
        tabBarColor:'#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default MainTabScreen;
const HomeStackScreen=({navigation})=>(
    <HomeStack.Navigator screenOptions={{
     headerStyle:{
      backgroundColor:'#009387',
      
    },
    headerTintColor:"#fff",
    headerTitleStyle:{
      fontWeight:"bold"
    }      }}>
           
          <HomeStack.Screen name="Home" component={HomeScreen} />
          </HomeStack.Navigator>
    
    
    );
    
    const ProductStackScreen=({navigation})=>(
      <ProductsStack.Navigator screenOptions={{
       headerStyle:{
        backgroundColor:'#009387',
        
      },
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }      }}>
              <ProductsStack.Screen name="Products" component={ProductScreen} options={{
              title:'Products',
              headerLeft:()=>(
               <Icon.Button name="ios-menu" size={25}
               backgroundColor="#009387" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
    
              )
              }}/>
         
            </ProductsStack.Navigator>
      
      
      );