import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Feed from '../screens/Feed';
import Post from '../screens/createPost'; // Assuming CreatePost is imported as Post
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

  return(
    <Drawer.Navigator>
        <Drawer.Screen name = 'home' component = {TabNavigator}></Drawer.Screen>
        <Drawer.Screen name = 'Profile' component = {Profile}></Drawer.Screen>
    </Drawer.Navigator>
  )

  export default DrawerNavigator