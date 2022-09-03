import React, { useCallback, useEffect, useState } from 'react'
import { Button, StatusBar, StyleSheet, Text, View, ImageBackground, Image, ImageBackgroundBase, Touchable, TouchableOpacity, FlatList, InteractionManager } from 'react-native' 
import Styles from './src/card/style'

const BACKCARD  = './src/card/images/traseira.png'
const CIRCULO   = './src/card/images/circulo.png'
const TRINGULO  = './src/card/images/triangulo.png'
const QUADRADO  = './src/card/images/quadrado.png'
const POLIGONO  = './src/card/images/poligono.png'
const HEXAGONO  = './src/card/images/hexagono.png'
const HEPTAGONO = './src/card/images/heptagono.png'
const OCTAGONO  = './src/card/images/octagono.png'
const ENEAGNO   = './src/card/images/eneagnono.png'

const getInitialBoard = () =>  [
  ['', '', '',''],
  ['', '', '',''],
  ['', '', '',''],
  ['', '', '','']
]

const App = () => {

  const listCard =  [
    CIRCULO,
    TRINGULO,
    QUADRADO,
    POLIGONO,
    HEXAGONO,
    HEPTAGONO,
    OCTAGONO,
    ENEAGNO
  ]
  const listCard2 = () =>  [
    'circulo', 'triagulo', 'quadrado', 'poligono', 'hexagono', 'heptagono', 'octagono', 'eneagno'
  ]

  const [newListCard, setNewListCard] = useState([])
  const [board, setBoard] = useState(getInitialBoard)
  const [buttonClicked, setButtonClicked] = useState(false)
  const [count, setCount] = useState(false)
  const [listCard3, setNewListCard3] = useState(listCard2)
  const [listBack, setListBack] = useState([
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '1'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '2'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '3'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '4'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '5'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '6'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '7'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '8'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '9'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '10'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '11'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '12'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '13'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '14'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '15'},
    { name: 'traseira',   source: require('./src/card/images/traseira.png'),   id: '16'},
  ])
  const [ListFront, setListFront] = useState([
    { name: 'circulo',   source: require('./src/card/images/circulo.png'),   id: '1'},
    { name: 'triangulo', source: require('./src/card/images/triangulo.png'), id: '2'},
    { name: 'quadrado',  source: require('./src/card/images/quadrado.png'),  id: '3'},
    { name: 'poligono',  source: require('./src/card/images/poligono.png'),  id: '4'},
    { name: 'hexagono',  source: require('./src/card/images/hexagono.png'),  id: '5'},
    { name: 'heptagono', source: require('./src/card/images/heptagono.png'), id: '6'},
    { name: 'octagono',  source: require('./src/card/images/octagono.png'),  id: '7'},
    { name: 'eneagono',  source: require('./src/card/images/eneagono.png'),  id: '8'},
    { name: 'circulo',   source: require('./src/card/images/circulo.png'),   id: '9'},
    { name: 'triangulo', source: require('./src/card/images/triangulo.png'), id: '10'},
    { name: 'quadrado',  source: require('./src/card/images/quadrado.png'),  id: '11'},
    { name: 'poligono',  source: require('./src/card/images/poligono.png'),  id: '12'},
    { name: 'hexagono',  source: require('./src/card/images/hexagono.png'),  id: '13'},
    { name: 'heptagono', source: require('./src/card/images/heptagono.png'), id: '14'},
    { name: 'octagono',  source: require('./src/card/images/octagono.png'),  id: '15'},
    { name: 'eneagono',  source: require('./src/card/images/eneagono.png'),  id: '16'},
    
  ])

  const toggleRuning = () => {  
  }

  const data = () => {
    if (buttonClicked === true) {
      return listBack
    } 
    else {
      return ListFront
    }
  }

  const randomCard = (item) => {  
    return item.source
  }

  const button = () => {
    if (buttonClicked == true) {
      setButtonClicked(false)
    }
    else {
      setButtonClicked(true)
    }
    
    console.log('teste')
    return null
  }

  const image = { uri: './src/card/images/triangulo.png' }

  return(
    <View>
      <Text style={Styles.title}>Jogo da Memoria</Text>
      <Text style={Styles.time}>00:00</Text>
      <View style={Styles.backcard}>
        <View>
          <FlatList
            numColumns={4}
            keyExtractor={( item ) => item.id}
            data={data()}
            renderItem={({ item }) => (
                <Image style={Styles.card}  source={randomCard(item)} /> 
              )
            }
          />
          <TouchableOpacity style={Styles.people} onPress={button}/>
          <TouchableOpacity style={Styles.people2} onPress={button}/>
          <TouchableOpacity style={Styles.people3} onPress={button}/>
          <TouchableOpacity style={Styles.people4} onPress={button}/>
          <TouchableOpacity style={Styles.people5} onPress={button}/>
          <TouchableOpacity style={Styles.people6} onPress={button}/>
          <TouchableOpacity style={Styles.people7} onPress={button}/>
          <TouchableOpacity style={Styles.people8} onPress={button}/>
          <TouchableOpacity style={Styles.people9} onPress={button}/>
          <TouchableOpacity style={Styles.people10} onPress={button}/>
          <TouchableOpacity style={Styles.people11} onPress={button}/>
          <TouchableOpacity style={Styles.people12} onPress={button}/>
          <TouchableOpacity style={Styles.people13} onPress={button}/>
          <TouchableOpacity style={Styles.people14} onPress={button}/>
          <TouchableOpacity style={Styles.people15} onPress={button}/>
          <TouchableOpacity style={Styles.people16} onPress={button}/>
          
          


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
