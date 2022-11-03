import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import SaoPaulo from './components/SaoPaulo';
import Peruibe from './components/Peruibe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SaoPaulo" component={SaoPaulo} />
        <Stack.Screen name="Peruibe" component={Peruibe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}