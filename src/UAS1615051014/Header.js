import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight,FlatList, TextInput} from 'react-native';

const Header = (props) => {
  return (
    <View style={{height:100, justifyContent:'center' ,alignItems:'center',backgroundColor: "#194B95"}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>
          UAS Aplikasi Mobile
        </Text>
        <Text style={{fontSize:14, fontWeight:'bold', color:'#fff'}}>
            I Ketut Endra Purteja Santosa 1615051014
        </Text>
    </View>
  );
}

export default Header;
