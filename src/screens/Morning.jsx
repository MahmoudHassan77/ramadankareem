import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";


 function Morning({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
  return (
    <ImageBackground blurRadius={10} source={require("../../assets/homeBck.jpg")} style={styles.imgContainer}>
      <Text>Morning</Text>
    </ImageBackground>
  )
}
export default Morning;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer:{
    flex: 1,
    backgroundColor: '#3A0CA3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width:274,
    height:274
  },
})