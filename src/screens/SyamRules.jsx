import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


 function SyamRules({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
  return (
    <Text>SyamRules</Text>
  )
}
export default SyamRules;