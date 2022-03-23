import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity,Dimensions } from "react-native";

function ContentButton({ navigation, title, navigateName }){

    const handlePress=()=>{
        navigation.navigate(navigateName);
    }
    return(
    <TouchableOpacity style={styles.contentBtn} onPress={handlePress}>
    <Image
      source={require("../../assets/homeIcon.png")}
      style={styles.homeIcon}
    />
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
  )
};

  export default ContentButton;

const styles = StyleSheet.create({
    contentBtn:{
        width:(Dimensions.get('window').width /100) * 40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:10,
        paddingBottom:10,
    },
    homeIcon: {
      width: 90,
      height: 90,
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#ffa90f",
    },
   
  });
  