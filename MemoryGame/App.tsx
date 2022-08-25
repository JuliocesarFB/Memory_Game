import React, { useCallback, useEffect, useState } from 'react'
import { Button, StatusBar, StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
//tentar importar css de outra pasta


const appStyle = StyleSheet.create({
  title: {
    color: 'black' ,
    textAlign: 'center',
    fontSize: 40,
    marginTop: 20
  },
  time: {
    color: 'black' ,
    textAlign: 'center',
    fontSize: 60,
    marginTop: 20
  },
  card: {
    width: 80,
    height: 80,
    margin: 10    
  },
  backcard: {
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 25
  },
  pair: {
    color: 'black' ,
    textAlign: 'center',
    fontSize: 24,
    margin: 10,
    marginTop: 50
  },
  button: {    
    padding: 10
  }
})



const App = () => {

  const toggleRuning = () => {  
  }

  // const randomCard = () => {

  //   const ArraysImg = [
  //     './images/traseira.png',
  //     './images/circulo.png',
  //     './images/triangulo.png',
  //     './images/quadrado.png',
  //     './images/poligono.png',
  //     './images/hexagono.png',
  //     './images/heptagono.png',
  //     './images/octagono.png',
  //     './images/eneagono.png'
  //   ]

  //   const random = Math.random() * (7 - 0) + 0
  //   card(random)
  //   return require(ArraysImg[0]) 
  //   //tentando retornar imagem
  // }


  // const card = (x: number) => {
  //   const cardX ={
  //     id: x,
  //     img: ArraysImg[x]
  //   } 
  //   const cardSorted = []
  //   return cardX.img
  // }

  return(
    <View>
      <Text style={appStyle.title}>Jogo da Memoria</Text>
      <Text style={appStyle.time}>00:00</Text>
      <View style={appStyle.backcard}>
        <View>
          {/* <ImageBackground source={randomCard()} style={appStyle.card}  ></ImageBackground> */}
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
        </View>
        <View>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
        </View>
        <View>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
        </View>
        <View>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
          <ImageBackground source={require('./style/images/traseira.png')} style={appStyle.card}  ></ImageBackground>
        </View>
        
      </View>
      <Text style={appStyle.pair}>Faltam 99 pares.</Text>
      <View style={appStyle.button}>
        <Button title='Iniciar'color={'#daa520'} onPress={toggleRuning} />
      </View>
      
    </View>
  )
}

export default App
