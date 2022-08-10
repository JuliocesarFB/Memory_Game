import React, { useCallback, useEffect, useState } from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
// import { Container, Col, Row } from "react-bootstrap";

const App = () => {
  return(
    <View>
      <Text>Jogo da Memoria</Text>
      <Text>00:00</Text>
      <View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </View>
      <Text>Faltam 99 pares.</Text>
      <Button title='Iniciar' />
    </View>
  )
}
