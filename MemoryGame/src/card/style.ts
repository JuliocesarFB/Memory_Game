import { Image, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    hiddenCard: {
        borderColor: '#000000',
        borderRadius: 25,
        borderWidth: 2
    },
    title: {
        color: 'black' ,
        textAlign: 'center',
        fontSize: 40,
        marginTop: 20
    },    
    time: {
      color: 'black',
      textAlign: 'center',
      fontSize: 60,
      marginTop: 20
    },    
    card: {
      width: 80,
      height: 80,
      margin: 10,
      borderColor: '#000000'
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

export default Styles