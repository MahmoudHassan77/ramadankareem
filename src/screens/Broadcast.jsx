import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


 function Broadcast({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
  return (
    <Text>Broadcast</Text>
  )
}
export default Broadcast;