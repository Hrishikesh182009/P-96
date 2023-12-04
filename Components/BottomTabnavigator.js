import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Feed from '../screens/Feed';
import PostCard from '../screens/createPost'; // Assuming CreatePost is imported as Post
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default class BottomTab extends Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Feed') {
                            iconName = focused ? 'book' : 'book-outline';
                        } else if (route.name === 'CreatePost') {
                            iconName = focused ? 'create' : 'create-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Feed" component={Feed} />
                <Tab.Screen name="CreatePost" component={Post} />
            </Tab.Navigator>
        );
    }
}
