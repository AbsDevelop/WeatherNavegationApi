import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Peruibe({navigation}){
  useEffect(
    ()=>{
      function test(){
          console.warn("UseEffect Test >>>");
      }
      test();
    }, []
  );
  
  return (
    <View style={styles.container}>
      <Text>Peruibe</Text>

      <TouchableOpacity
        onPress={ () => navigation.navigate('HomeScreen')}
      >
          <Text>
              Bairros de Peruíbe  
          </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});