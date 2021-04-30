
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'



export default class App extends React.Component {

  

  constructor(props) {
    super(props);

    this.state = {

      endereco: ''


    }

  }


  componentDidMount()
  {
  
    axios
      .get('https://viacep.com.br/ws/06401135/json/')
      .then(response => {
  
        this.setState({
  
          endereco: response.data
        })
        
        console.log(this.state.response.data);
  
      })
  
  }


render(){


  return ( 
      {
         /* "cep": "06401-135",
         "logradouro": "Avenida João Batista Soares",
         "complemento": "(Centro Comercial Barueri)",
         "bairro": "Centro",
         "localidade": "Barueri",
         "uf": "SP",
         "ibge": "3505708",
         "gia": "2069",
         "ddd": "11",
         "siafi": "6213"  */

      }

      

  );

      
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#842bd7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
























