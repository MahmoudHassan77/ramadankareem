import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


 function Morning({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
  return (
    <Text>Morning</Text>
  )
}
export default Morning;