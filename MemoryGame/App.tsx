import React, { useCallback, useEffect, useState } from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
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
    backgroundColor: 'yellow',
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

  return(
    <View>
      <Text style={appStyle.title}>Jogo da Memoria</Text>
      <Text style={appStyle.time}>00:00</Text>
      <View style={appStyle.backcard}>
        <View>
          <View style={appStyle.card}></View>  
          <View style={appStyle.card}></View>
          <View style={appStyle.card}></View>
          <View style={appStyle.card}></View>
        </View>
        <View>
          <View style={appStyle.card}></View>  
          <View style={appStyle.card}></View>
          <View style={appStyle.card}></View>
          <View style={appStyle.card}></View>
        </View>
        <View>
          <View style={appStyle.card}></View>  
          <View style={appStyle.card}></View>
          <View style={appStyle.card}></View>
          <View style={appStyle.card}></View>
        </View>
        <View>
          <View style={appStyle.card}></View>  
          <View style={appStyle.card}></View>
          <View style={appStyle.card}></View>
          <View style={appStyle.card}></View>
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
