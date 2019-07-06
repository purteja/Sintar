import React, { Component } from "react";
import { View, Text,Button, StyleSheet, Image } from "react-native";
import { isFrontCameraAvailable } from "expo/build/AR";
import { StackNavigator } from 'react-navigation';
import Header from './Header';

class Front extends React.Component {static navigationOptions={
    Header:null,
}

render(){
    return (
        <View style={styles.container}>
        <Header/>
        <View style={styles.vHeader}>
            <Text style={styles.txtHeader}> SiNTAR</Text>
            <Text style={styles.txtHeader}> Sistem Pencatatan Barang</Text> 
        </View>
        <Image style={styles.gambar} source={require("./logo.png")} resizeMode="center"
        />
        <View style={styles.vButton}>
            <Button color="orange"
                onPress={() => this.props.navigation.navigate('Signup')}
                title="SIGN-UP" accessibilityLabel="SIGN-UP"
            />
        </View>
        <View style={styles.vButton}>
            <Button color="orange"
                onPress={() => this.props.navigation.navigate('Login')}
                title="LOG-IN" accessibilityLabel="LOG-IN"
            />
            </View>
        </View>
    )} 
}
export default Front;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#004225', 
        flex: 1
    },
    vHeader: { 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:20,
        marginBottom:50,
    },
    txtHeader: {
        fontSize:30,
    },
    vButton: { 
        marginLeft:50, 
        marginRight:50, 
        marginBottom:20,
    },
    gambar: { 
        height:300, 
        width:200, 
        marginLeft:80,
        marginTop:-100,
    },
});
