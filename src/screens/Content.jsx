import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Dimensions,Image } from "react-native";
import  ContentButton  from '../components/ContentButton';

const DATA = [
    {
      id: 'btn1',
      title: 'أحكام الصيام',
      navigate: 'SyamRules',
      icon:"rules"
    },
    {
      id: 'btn2',
      title: 'الإمساكية',
      navigate: 'Calender',
      icon:"calender"
    },
    {
      id: 'btn3',
      title: 'أدعية الرسول',
      navigate: 'ProfitPrayer',
      icon:"prayer"
    },
    {
      id: 'btn4',
      title: 'السبحة الإلكترونية',
      navigate: 'Counter',
      icon:"counter"
    },
    {
        id: 'btn5',
        title: 'أذكار المساء',
        navigate: 'Evening',
        icon:"evening"
      },
      {
        id: 'btn6',
        title: 'أذكار الصباح',
        navigate: 'Morning',
        icon:"morning"
      },
      {
        id: 'btn7',
        title: 'الإذاعة',
        navigate: 'Broadcast',
        icon:"broadcast"
      },

  ];

function Content({navigation}) {

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);

      const renderItem =({item})=>(
          <ContentButton title={item.title} navigateName={item.navigate} icon={item.icon} navigation={navigation} />
      )

    return ( 
      <ImageBackground blurRadius={10} source={require("../../assets/homeBck.jpg")} style={styles.imgContainer}>
       <View style={styles.container}>
        <View style={styles.details}>
        <View style={styles.logo}>
          <Image style={styles.logoImg} source={require("../../assets/company.jpg")} ></Image>
          <Text style={styles.logoText}>برعاية مهندس: أحمد سمير</Text>
          </View>
        <View style={styles.list}>
        <FlatList
       contentContainerStyle={styles.flatList} 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        />
        </View>
        </View>
      
      </View> 
      </ImageBackground>
      );
}

export default Content;


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
    logoImg:{
      width:80,
      height:80,
      marginBottom:3
    },
    details:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        position:"absolute",
        display:"flex",
        flexDirection:"column",
    },
    logo:{
        width:"100%",
        height:"20%",
        fontSize:20,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // flexDirection:"row-reverse",
        // borderColor:"#000",
        // borderWidth:1,
        borderBottomEndRadius:70,
        borderBottomStartRadius:70,
        backgroundColor:"#FFB833",
    },
    logoText:{
        fontSize:15,
        color:"#012B67",
    },
    flatList:{
        flexDirection : "row",
        flexWrap : "wrap",
        padding:5,
        justifyContent: "center",
    },
    list: {
      width:"100%" ,
      height:"70%",
    //   flexWrap:"wrap",
    //   flexDirection:"row",
    },
    backgroundImage: {
      flex: 1,
     resizeMode: "cover", // or 'stretch'
    },
  });