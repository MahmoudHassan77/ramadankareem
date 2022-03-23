import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from "react-native";
import  ContentButton  from '../components/ContentButton';

const DATA = [
    {
      id: 'btn1',
      title: 'أحكام الصيام',
      navigate: 'SyamRules'
    },
    {
      id: 'btn2',
      title: 'الإمساكية',
      navigate: 'Calender'
    },
    {
      id: 'btn3',
      title: 'أدعية الرسول',
      navigate: 'ProfitPrayer'
    },
    {
      id: 'btn4',
      title: 'السبحة الإلكترونية',
      navigate: 'Counter'
    },
    {
        id: 'btn5',
        title: 'أذكار المساء',
        navigate: 'SyamRules'
      },
      {
        id: 'btn6',
        title: 'أذكار الصباح',
        navigate: 'Calender'
      },
      {
        id: 'btn7',
        title: 'الإذاعة',
        navigate: 'ProfitPrayer'
      },

  ];

function Content({navigation}) {

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);

      const renderItem =({item})=>(
          <ContentButton title={item.title} navigateName={item.navigate} />
      )

    return ( 
    <View style={styles.container}>
        <Image
          source={require("../../assets/homeBck.jpg")}
          style={styles.backgroundImage}
        />
        <View style={styles.details}>
        <View style={styles.logo}><Text style={styles.logoText}>شركة الفرسان </Text></View>
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
      );
}

export default Content;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
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
        // borderColor:"#000",
        // borderWidth:1,
        borderBottomEndRadius:70,
        borderBottomStartRadius:70,
        backgroundColor:"#FFB833",
    },
    logoText:{
        fontSize:30,
        fontWeight:"bold",
        color:"#fff",
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