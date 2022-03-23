import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


 function Counter({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
  return (
    <Text>Counter</Text>
  )
}
export default Counter;