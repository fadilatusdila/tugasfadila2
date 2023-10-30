import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Beranda from './src/screens/Beranda'
import Belanja from './src/screens/Belanja'
import Profil from './src/screens/Profil'

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Beranda" component={Beranda} />
            <Tab.Screen name="Belanja" component={Belanja} />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='MainTab'
        component={MainTab}
        options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
