import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


 function Calender({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
  return (
    <Text>Calender</Text>
  )
}
export default Calender;