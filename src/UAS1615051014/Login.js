import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from'react-native';
import { StackNavigator } from 'react-navigation';

class Login extends React.Component {static navigationOptions ={
    Header: null,
}
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
        };
    }
UserLoginFunction = () =>{
    const { username } = this.state;
    const { password } = this.state;
    fetch('https://catatbarang.000webhostapp.com/API/login_username.php', {
        method: 'POST',
        
        headers: {
            'Accept': 'application/json',
            'content-type':'application/json',
        },


        body: JSON.stringify({
            [username]: username,
            [password]: password
        })
        }).then((response)=> response.json())
            .then((responseJson) => {
                if (responseJson ==='Data Cocok') {
                    this.props.navigation.navigate('Utama');
                } else {
                    Alert.alert(responseJson);
                }
            }).catch((error)=>{
                console.error(error);
        });
    
}  
render() {
    return (
        <View style={styles.container}>
            <View style={styles.vHeader}>
                <Text style={styles.txtHeader}> Login Form</Text>
                <Text style={styles.txtHeader}> SiMBar</Text>
            </View>
            <Image style={styles.gambar} source={require("./logo.png")}
                resizeMode="contain"
            />
            <View style={styles.vInput}>
                <View style={styles.itemInput2}>
                    <Text>Username</Text>
                    <TextInput 
                        style={styles.txtInput} keyboardType='default' onChangeText ={
                        username => this.setState({username})
                        }
                    />
                </View>
                <View style={styles.itemInput}>
                    <Text>Password</Text>
                    <TextInput style={styles.txtInput} keyboardType='default' secureTextEntry={true} onChangeText ={
                        password =>this.setState({password})
                    }
                    />
                </View>
            </View>
            <View style={styles.vButton}>
            <Button color="orange"
                onPress={this.UserLoginFunction} title="LOG-IN" accessibilityLabel="LOG-IN"
            />
            </View>
        </View>
    )}
}
export default Login;

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
    vInput:{
        flex:2,
    },
    itemInput :{ 
        flexDirection:'row', 
        marginTop:10, 
        marginLeft:20
    },
    itemInput2 :{ 
        flexDirection:'row', 
        marginTop:10, 
        marginLeft:20
    }, 
    txtInput:{
        width:200, 
        height:30,
        backgroundColor :'white', 
        borderWidth:1, 
        marginLeft:10
    },
    vButton: { 
        width:200, 
        height:40, 
        marginTop:20, 
        marginBottom:100, 
        marginLeft:80, 
        marginRight:100,
    },
    gambar: { 
        height:170, 
        width:150, 
        marginBottom:50, 
        marginLeft:120, 
        marginRight:100,
    },
});
