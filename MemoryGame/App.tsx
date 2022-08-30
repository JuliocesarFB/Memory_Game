import React, { useCallback, useEffect, useState } from 'react'
import { Button, StatusBar, StyleSheet, Text, View, ImageBackground, Image } from 'react-native' 
import Styles from './src/card/style'

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
      <Text style={Styles.title}>Jogo da Memoria</Text>
      <Text style={Styles.time}>00:00</Text>
      <View style={Styles.backcard}>
        <View>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
        </View>
        <View>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
        </View>
        <View>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
        </View>
        <View>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
          <ImageBackground source={require('./src/card/images/traseira.png')} style={Styles.card} ></ImageBackground>
        </View>
        
      </View>
      <Text style={Styles.pair}>Faltam 99 pares.</Text>
      <View style={Styles.button}>
        <Button title='Iniciar'color={'#daa520'} onPress={() => {}} />
      </View>
      
    </View>
  )
}

export default App
