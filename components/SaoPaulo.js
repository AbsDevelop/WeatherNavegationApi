import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function SaoPaulo({navigation}){
  return (
    <View style={styles.container}>
      <Text>Cidades de São Paulo</Text>

      <TouchableOpacity
        onPress={ () => navigation.navigate('Peruibe')}
      >
          <Text>
              Peruíbe  
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