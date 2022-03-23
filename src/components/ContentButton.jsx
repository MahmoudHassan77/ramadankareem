import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity,Dimensions } from "react-native";

function ContentButton({ navigation, title, navigateName,icon }){
const getImage=(icon)=>{
  switch (icon){
    case "rules":
      return require("../../assets/rules.png");
    case "calender":
      return require("../../assets/calender.png");
    case "prayer":
      return require("../../assets/prayer.png");
    case "counter":
      return require("../../assets/counter.png");
    case "evening":
      return require("../../assets/evening.png");
    case "morning":
      return require("../../assets/morning.png");
    case "broadcast":
      return require("../../assets/broadcast.png");
    default:
      return  require("../../assets/homeIcon.png");
  }

}
    const handlePress=()=>{
        navigation.navigate(navigateName);
    }
    return(
    <TouchableOpacity style={styles.contentBtn} onPress={handlePress}>
    <Image
      source={getImage(icon)}
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
  