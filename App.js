import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import Brasilia from './components/Brasilia';
import BeloHorizonte from './components/BeloHorizonte';
import Curitiba from './components/Curitiba';
import RiodeJaneiro from './components/RiodeJaneiro';
import SaoPaulo from './components/SaoPaulo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meteorologia" component={HomeScreen} />
        <Stack.Screen name="Brasilia" component={Brasilia} />
        <Stack.Screen name="BeloHorizonte" component={BeloHorizonte} />
        <Stack.Screen name="Curitiba" component={Curitiba} />
        <Stack.Screen name="RiodeJaneiro" component={RiodeJaneiro} />
        <Stack.Screen name="SaoPaulo" component={SaoPaulo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}