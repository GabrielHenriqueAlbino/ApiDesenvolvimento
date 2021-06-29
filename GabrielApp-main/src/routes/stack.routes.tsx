import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Paciente from '../Pages/Paciente/Paciente';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >

        <stackRoutes.Screen
            name="Login"
            component={Login}
        />

        <stackRoutes.Screen
            name="Home"
            component={Home}
        />

        <stackRoutes.Screen
            name="Paciente"
            component={Paciente}
        />

    </stackRoutes.Navigator>
);

export default AppRoutes;



