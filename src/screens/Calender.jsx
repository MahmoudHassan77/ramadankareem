import React from 'react'
import { StyleSheet, Text, ScrollView, View, ImageBackground, TouchableOpacity } from "react-native";
import Day from '../components/Day';

 function Calender({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);

    const navigateToDetails=(num)=>{
      navigation.navigate('CalenderDetails', {
        page: num
      });
    }
  return (
    <ImageBackground blurRadius={10} source={require("../../assets/homeBck.jpg")} style={styles.imgContainer}>
      <ScrollView centerContent={true} >
        <View style={styles.container}>
        {Array(30).fill().map((n,i)=>(
            <TouchableOpacity style={styles.btn} key={`day${i}`} onPress={()=>navigateToDetails(i+1)}>
               <Day dayNumber={i+1} />
               <Text style={styles.text}>رمضان</Text>
            </TouchableOpacity>
        ))}
        </View>
      </ScrollView>
    </ImageBackground>
  )
}
export default Calender;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row-reverse",
    alignItems: "center",
    justifyContent: "center",
    flexWrap:"wrap",
    width:"100%"
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
  btn:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:3
  },
  text:{
    fontSize:19,
    fontWeight:"bold",
    color:"#ffa90f"
  }
})