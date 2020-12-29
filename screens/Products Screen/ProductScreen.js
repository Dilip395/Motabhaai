// import React from 'react'
// import { StyleSheet, Text, View,Button } from 'react-native';

// function ProductScreen ({navigation}){
//     return(
//       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//   <Text>Product Screen</Text>
//   <Button 
//   title="Go to Home Screen"
//   onPress={()=>navigation.navigate("Home")}
//   />
 
//       </View>
//     )
//   }

// export default ProductScreen
import React,{Component} from "react";
import {View,FlatList,ActivityIndicator} from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text,Content, List, ListItem, Left, Body, Right, Thumbnail,Card,CardItem } from 'native-base';
import  _ from 'lodash';
import { FAB } from 'react-native-paper';


export default class ProductScreen extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[],
      fullData:[],
      loading:false,
      error:null
    }
  }

  componentDidMount(){
    this.requestAPIPhotos()
  }

  requestAPIPhotos=()=>{
    this.setState({loading:true})
    const apiURL="https://jsonplaceholder.typicode.com/photos"
    fetch(apiURL).then((res)=>res.json()).then((resJson)=>{
      this.setState({
        loading:false,
        data:resJson,
        fullData:resJson,
        query:''
      })
    }).catch(error=>{
      this.setState({error,loading:false})
    })

  }

  _renderItem=({item,index})=>{
    return(
<CardItem avatar style={{margin:20,borderRadius:10,elevation: 12}}>
              <Left>
                <Thumbnail source={{ uri: item.thumbnailUrl }} />

              </Left>
              <Body>
                <Text>{item.title}</Text>
                
              </Body>
              <Right>
              <Body style={{flexDirection: 'row', flex:1}}><Text style={{fontWeight:"bold",fontSize:20,color:'orange'}}>  {'\u20B9'} </Text><Text>55</Text></Body>
              </Right>
            </CardItem>
    )
  }
  renderFooter=()=>{
if(!this.state.loading) return null
return(
  <View style={{paddingVertical:20,borderTopWidth:1,borderColor:'#CED0CE'}}>
    <ActivityIndicator animating size="large"/>

  </View>
)
  }
  handleSearch=(text)=>{
    const formattedQuery=text.toLowerCase()
    const data=_.filter(this.state.fullData,photo=>{
      if(photo.title.includes(formattedQuery)){
        return true
      }
      return false
    })
    this.setState({data,query:text})
  }
  render(){
    
    return(
      <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" onChangeText={this.handleSearch} />
          <Icon name="ios-people" />
        </Item>
        {/* <Button transparent>
          <Text>Search</Text>
        </Button> */}
      </Header>
      <Card style={{backgroundColor:'#EBEDF3',margin:10,}}>
        <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={(item,index)=>index.toString()}
        ListFooterComponent={this.renderFooter}
        />
            {/* <Fab
   direction="up"
 
  style={{ backgroundColor: '#eba259',borderRadius:5 }}
  position="bottomRight"
  // onPress={() => this.props.navigation.navigate('CreateChallange')}
  >
  <Icon type="MaterialCommunityIcons" size={40} name="plus" />
 
</Fab> */}


          </Card>
          <FAB
    style={{ position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 50,
    backgroundColor:'#02075D'
  }}
    small
    icon="filter"
    onPress={() => console.log('Pressed')}
  />
    <FAB
    style={{ position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:'#02075D'
  }}
    small
    icon="plus"
    onPress={() =>{}}
  />
    </Container>
    )
  }
}