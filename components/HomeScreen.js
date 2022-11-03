import React, {useState}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import Api from './components/Api';

export default function App() {
  const [dadosA, setDadosA] = useState("");
  const [dadosB, setDadosB] = useState("");
  const [dadosAS, setDadosAS] = useState("");
  const [dadosBS, setDadosBS] = useState("");
  const [cidade, setCidade] = useState("");
  const br = `\n`;

  async function buscaCep(){
    const response = await Api.get(`weather?array_limit=10&fields=only_results,temp,city_name,forecast,max,min,date,time,description,city,humidity,wind_speedy%20&key=ca53326e&city_name=${cidade}`);
    setDadosA(response.data.forecast);
    setDadosB(response.data.forecast[1]);
    setDadosAS(response.data);
    setDadosBS(response.data);
  }

  return (
    
      <View style={styles.container}>
          <Text style={styles.title}>
            Previsão do Tempo
          </Text>

          <Image style={styles.img}
            source={{uri: 'https://eusousolar.com.br/calculadora/img/sun.gif',}}
          />

          <Text style={styles.textBlock}>Informe sua Cidade:</Text>
          <TextInput style={styles.input}
            placeholder='                Ex.: São Paulo, SP                '
            onChangeText={data=>setCidade(data)}
          />
            
          <TouchableOpacity style={styles.btn} onPress={buscaCep}>
            <Text style={styles.textbtn}>Buscar</Text>
          </TouchableOpacity>	 
          
            {/* 
            <Tempo dataA={dadosA}
              dataB={dadosB} 
              dataAS={dadosAS}
              dataBS={dadosBS} 
            /> 
            */}

            <FlatList
              data={dadosA}
              renderItem={({item}) => {
                return(
                  <View>
                    <Text style={styles.date}>Data: {item.date}</Text>
                    <Text>Max: {item.max}</Text>
                    <Text>Min: {item.min}</Text>
                    <Text>Descrição: {item.description}{br}</Text>
                  </View> 
                );
              }}
            />  
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center'
  },
  title: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
	  marginTop: 60
  },	
  img: {
    width: 190,
    height: 190,
    marginTop: 30,
    marginBottom: 30
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    textAlign: 'center'
  },
  textBlock: {
    fontSize: 20,
	  justifyContent: 'center'
  },
  btn: {
	  width: '80%',
  	marginTop: 10,
  	marginBottom: 15,
    borderWidth: 1,
    borderRadius: 12,
    borderBottomColor: 'black'
  },
  textbtn: {
	  fontSize: 20,
	  textAlign: 'center'
  },
  date: {
    fontWeight: 'bold'
  }
});