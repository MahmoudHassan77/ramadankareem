import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


 function Evening({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
  return (
    <Text>Evening</Text>
  )
}
export default Evening;