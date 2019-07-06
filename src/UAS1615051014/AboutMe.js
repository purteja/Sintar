import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from './Header';


export default class AboutMe extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Header/>

        <View style={styles.bioContainer}>
        <View style={styles.photoContainer}>
                    <Image source={{ uri: 'https://scontent-sin6-1.cdninstagram.com/vp/798434a27be5d89b9b27df43b4e7e022/5D50BF8B/t51.2885-15/e35/41704025_2267325513294761_1657517683856281977_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=105' }} 
                    style={styles.photo}/>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.textBio}>Nama :I Ketut Endra Purteja Santosa</Text>
                    <Text style={styles.textBio}>NIM : 1615051014</Text>
                    <Text style={styles.textBio}>Kelas : 4A</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  detailContainer : {
    flex: 0.6,
    justifyContent: 'center',
    marginLeft:25,
},
photo:{
    width: 150,
    height: 200,
    // backgroundColor: '#005ff0',
},
bioContainer : {
  flex: 0.9,
  flexDirection: 'row',
  marginTop: 25,
  backgroundColor : "#ffffff",

},
photoContainer : {
  flex: 0.4,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 20,
  borderRadius:40
},
textBio:{
  fontSize: 15,
  justifyContent: 'center',
  color : 'black'
},
vbox1: {
    flex:0.1,
    backgroundColor: '#ffffff',
    marginLeft: 100,
    marginRight : 100,
    marginTop : 100,
    marginBottom : 10,
    alignItems: 'center',
    justifyContent: 'space-around',
},
text:{
    fontSize:20,
    color:'white',
},

});
