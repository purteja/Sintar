import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { StackNavigator } from 'react-navigation';
import Header from './Header';

class Utama extends React.Component { static navigationOptions = {
    Header: null,
};

render() {
    return (
        <View style={styles.container}>
            <View style={styles.vHeader}>
                <Text style={styles.txtHeader}> Sistem Pencatatan Barang</Text>
                <Text style={styles.txtHeader}> SiMBar</Text> 
            </View> 
            <Image style={styles.gambar} source={require("./logo.png")} resizeMode="contain"
            />
            <View style={styles.vButton}>
                <Button color="orange"
                    onPress={() => this.props.navigation.navigate('Data Barang')}
                    title="Data Barang" accessibilityLabel="Data Barang"
                />
            </View>
            <View style={styles.vButton}>
                <Button color="orange"
                    onPress={() => this.props.navigation.navigate('Kategori Barang')}
                    title="Kategori Barang" accessibilityLabel="Kategori Barang"
                />
            </View>
            <View style={styles.vButton}>
                <Button color="orange"
                    onPress={() => this.props.navigation.navigate('AboutMe')}
                    title="AboutMe" accessibilityLabel="AboutMe"
                />
            </View>
        </View>
    )}
}
export default Utama;

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
        color:'black'
    },
    vButton: { 
        marginTop:20, 
        marginLeft:50, 
        marginRight:50,
        marginBottom:20,
    },
    gambar: { 
        height:300, 
        width:200, 
        marginLeft:80, 
        marginTop:-100,
        marginBottom:-40,
    },
});
