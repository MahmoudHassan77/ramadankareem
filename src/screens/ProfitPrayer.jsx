import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


 function ProfitPrayer({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
  return (
    <Text>ProfitPrayer</Text>
  )
}
export default ProfitPrayer;