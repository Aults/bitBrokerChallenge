// In App.js in a new project

import * as React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, View, Text, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import { Avatar } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function defaultFollowers(i) {
  return (
    <React.Fragment key={i}>
      <ProfileTemplate key ="i" name="Bob" description="A group of builders talking about what they've built and what's still ahead" profilePicture="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" members="8" thanks="1.2M" followers="57k"/>
      <ProfileTemplate key ="i+1" name="Person" description="A data structures god who is the son of Sesh Venugopal" profilePicture="https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg" members="10" thanks="1M" followers="37k"/>
      <ProfileTemplate key ="i+2" name="John" description="A data structures god who is the son of Sesh Venugopal" profilePicture="https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" members="10" thanks="1M" followers="37k"/>
      <ProfileTemplate key ="i+3" name="Brandon" description="Currently creating a react native application" profilePicture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTorDmnCsd0Iqim0FeInyBjyLPcwJWnTgRkzg&usqp=CAU" members="20" thanks="2M" followers="20k"/>
      <ProfileTemplate key ="i+4" name="Tom" description="Another user! Here is their description..." profilePicture="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" members="10" thanks="4M" followers="24k"/>
      <ProfileTemplate key ="i+5" name="Thomas" description="I'm running out of things to put in descriptions..." profilePicture="https://i.redd.it/cqxp2xypqo941.jpg" members="16" thanks="5.5M" followers="1k"/>
    </React.Fragment>
  );
}
function FollowersScreen() {
  var Followers = []
  Followers.push()
  for(let i = 0; i < 500; i=i+10){
    Followers.push(
      defaultFollowers(i)
    )
  }
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 90}}>
      {Followers}
    </ScrollView>
  );
}

function FollowingScreen() {
  var Followers = []
  Followers.push()
  for(let i = 0; i < 100; i=i+10){
    Followers.push(defaultFollowers(i))
  }
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 90}}>
      {Followers}
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function ProfileTemplate(props) {
  let profPic = props.profilePicture
  let follow = "Follow"
  ButtonClickCheckFunction = () =>{
    follow = "Following"
  }
  return (
  <>
    <View
      style={{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      }}
    />
    <View style={{backgroundColor: 'white', justifyContent:'space-between', flexDirection: 'row'}}>
      <View style={{padding:10}}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri:
              `${profPic}`,
          }}
          elevation={8}
          avatarStyle={{borderRadius: 45 / 2,
                          borderColor: 'white',
                          borderWidth: 1.8
                          }}

        />
      </View>
      <View style={{backgroundColor: 'white', justifyContent:'space-between', flexDirection: 'column'}}>
        <View style={{backgroundColor: 'white', width: 335, paddingTop: 7, flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, paddingBottom: 3}}>{props.name}</Text>
          <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity = { .5 }
                    onPress={ButtonClickCheckFunction}

          >
            <Text style={styles.TextStyle}>{follow}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{width: 265, color:'#999999', paddingBottom: 5}}>{props.description}</Text>
        <View style={{backgroundColor: 'white', width: '71%', justifyContent:'space-between', flexDirection: 'row', paddingBottom:10}}>
          <Text style={{fontSize: 12}}>{props.members} Members</Text>
          <Text style={{fontSize: 12}}>{props.thanks} Thanks</Text>
          <Text style={{fontSize: 12}}>{props.followers} Followers</Text>
        </View>

      </View>

    </View>
    </>
  );
}
export default function App() {

  return (
    <NavigationContainer>
      <View
        style={{
          backgroundColor : "white",
          marginTop: 0,
          height: 800,
        }}>
        <View style={{justifyContent:'space-between', flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button}>
            <Icon name="left" size={25}/>
          </TouchableOpacity>
          <Text style={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'GillSans-Light', color: '#ff5e62'}}>Brandon Mazur</Text>
          <TouchableOpacity style={styles.button}>
            <IconFeather name="more-horizontal" size={25}/>
          </TouchableOpacity>
        </View>

        <Tab.Navigator

          tabBarOptions={{
            labelStyle: { fontSize: 16, fontWeight: 'bold', textTransform: "none", },style: {},
            activeTintColor: '#ff5e62',
            style: styles.container,
            borderTopWidth: 0,

            inactiveTintColor: 'gray',
          }}
        >

          <Tab.Screen name="Followers" component={FollowersScreen} options={{tabBarLabel: 'Followers'}}/>
          <Tab.Screen name="Following" component={FollowingScreen} options={{tabBarLabel: 'Following'}}/>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 0
  },
  MainContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },

  SubmitButtonStyle: {
    marginTop: 10,
    position: 'absolute',
    width:80,
    height:26,
    flex:1,
    right: 20,
    backgroundColor:'#ff5e62',
    borderRadius:110,
    borderWidth: 3,
    borderColor: '#ff5e62'
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  },
  container: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent'
  }
});