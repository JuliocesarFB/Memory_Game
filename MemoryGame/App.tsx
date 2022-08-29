import React, { useCallback, useEffect, useState } from 'react'
import { Button, StatusBar, StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import * as appStyle from './style/styles.css' 

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
