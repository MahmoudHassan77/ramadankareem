import React from 'react'
import {TouchableOpacity, Text,StyleSheet} from 'react-native'
 const TasbehButton = ({text, handleBtn}) => {
  return (
      <TouchableOpacity style={styles.btn} onPress={handleBtn}>
          <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
  )
}

export default TasbehButton;

const styles = StyleSheet.create({
    btn:{
        width:"25%",
        height:60,
        borderColor:"white",
        borderWidth:2,
        borderRadius:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        padding:3
    },
    text:{
        fontWeight:"bold",
        color:"#ffa90f",
        textAlign:"center"
    }
})