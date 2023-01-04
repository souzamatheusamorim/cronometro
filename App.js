import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'Iniciar'
    };

    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar(){
if(this.timer != null){
  clearInterval(this.timer);
  this.timer = null;

  this.setState({botao: 'Iniciar'});
} else {
  this.timer = setInterval( ()=> {
      this.setState({numero: this.state.numero + 0.1})

    }, 100);

    this.setState({botao: 'Parar'})
}

    
  }

  limpar(){
 if(this.timer != null){
  clearInterval(this.timer);
  this.timer = null;
 }
 this.setState({
  numero: 0
  
 }),
 this.setState({botao: 'Iniciar'});
  }

  render (){
    return(
      <View style={styles.container} >

        <Image source={require('./src/cronometro.png')} 
        style={styles.cronometro}
        />

        <Text style={styles.timer}> {this.state.numero.toFixed(2)} </Text>
        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.iniciar}> 
            <Text style={styles.btnTexto}> {this.state.botao} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}> 
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>

        </View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 100,
    height: 40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 20,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }
});

export default App;