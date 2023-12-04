import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet, Alert, Platform, StatusBar, SafeAreaView, Linking, ScrollView, FlatList } from 'react-native';

export default class Feed extends Component{
     renderItem = ({item : post}) => {
        return <PostCard post = {post}/>
     };

     keyExtractor = (item, index) => index.toString();  

    render(){
        return(
            <View style = {styles.container}>
            <SafeAreaView style = {styles.droidSafeArea}/> 
            <View style={styles.appTitle}>
                <Text style = {styles.appTitleText}>Spectogram</Text>
            </View>
            <View style = {styles.cardContainer}>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={posts}
                renderItem={this.renderItem}/>
            </View>
            </View>
            
        )
    }
}
  const style = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor : 'white'
    },

    droidSafeArea : {
        marginTop : Platform.Os === 'android' ? StatusBar.currentHeight : 35
    },

    appTitle:{
        flex : 0.07,
        padding : 5,
        flexDirection : 'row',
        justifyContent : 'center'
    },

    appTitleText:{
        color : 'white',
        fontSize : 28,
    },

    cardContainer : {
        flex : 0.093
    }
  })