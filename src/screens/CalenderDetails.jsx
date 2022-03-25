import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, ScrollView, View, ImageBackground, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';

 function CalenderDetails({route,navigation}) {
     const [page, setPage] =useState(route.params.page);
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
     const  getImage=()=>{
        switch(page){
            case 1:
               return require(`../../assets/dayes/1.png`);
            case 2:
               return require(`../../assets/dayes/2.png`);
            case 3:
               return require(`../../assets/dayes/3.png`);
            case 4:
               return require(`../../assets/dayes/4.png`); 
            case 5:
               return require(`../../assets/dayes/5.png`);
            case 6:
               return require(`../../assets/dayes/6.png`);
            case 7:
               return require(`../../assets/dayes/7.png`);
            case 8:
                return require(`../../assets/dayes/8.png`);
            case 9:
                return require(`../../assets/dayes/9.png`);
            case 10:
               return require(`../../assets/dayes/10.png`);
            case 11:
               return require(`../../assets/dayes/11.png`);
            case 12:
                return require(`../../assets/dayes/12.png`); 
            case 13:
               return require(`../../assets/dayes/13.png`);
            case 14:
               return require(`../../assets/dayes/14.png`);
            case 15:
                 return require(`../../assets/dayes/15.png`);
            case 16:
               return require(`../../assets/dayes/16.png`);   
            case 17:
               return require(`../../assets/dayes/17.png`);
            case 18:
                 return require(`../../assets/dayes/18.png`);
            case 19:
                  return require(`../../assets/dayes/19.png`);
            case 20:
                return require(`../../assets/dayes/20.png`);
            case 21:
                return require(`../../assets/dayes/21.png`);
             case 22:
                 return require(`../../assets/dayes/22.png`); 
             case 23:
                return require(`../../assets/dayes/23.png`);
             case 24:
                return require(`../../assets/dayes/24.png`);
             case 25:
                  return require(`../../assets/dayes/25.png`);
             case 26:
                return require(`../../assets/dayes/26.png`);   
             case 27:
                return require(`../../assets/dayes/27.png`);
             case 28:
                  return require(`../../assets/dayes/28.png`);
             case 29:
                   return require(`../../assets/dayes/29.png`);
             case 30:
                 return require(`../../assets/dayes/30.png`);                          
        }
        }
  return (
    <ImageBackground source={require("../../assets/calenderBK.png")} style={styles.imgContainer}>
    <StatusBar backgroundColor='#463C33' style='light' />
     <Image source={getImage()} style={styles.img}></Image>
     <Text  style={styles.text}>شركة فرساي للتجارة والمقاولات والتشكيلات المعدنية</Text>
     <Text  style={styles.text}>برعاية المهندس: أحمد متولي</Text>
    </ImageBackground>
  )
}
export default CalenderDetails;
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
    height:274,

  },
  img:{
    width:"100%",
    height:"80%",
    resizeMode:"contain"
  },
  text:{
    fontSize:19,
    fontWeight:"bold",
    color:"#E9CD9E",
    textAlign:"center"
  }
})