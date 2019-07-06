import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Front from './Front';
import AboutMe from './AboutMe';
import Utama from './Utama';
import { createStackNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
    Front: Front,
    Login: Login,
    Signup:Signup,
    AboutMe: AboutMe,
    Utama: Utama,
},{
    initialRouteName: 'Front'
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

