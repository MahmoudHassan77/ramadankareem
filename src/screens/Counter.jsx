import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground,Dimensions } from "react-native";
import TasbehButton from '../components/TasbehButton';


 function Counter({navigation}) {
   const [tasbeh,setTasbeh] = useState("");
   const [counter,setCounter] = useState(0);
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
      useEffect(()=>{
        setCounter(0);
      },[tasbeh])
   const handleCounter =()=>{
     setCounter(counter+1);
   }   
   const handleBtn=(text)=>{
    setTasbeh(text);
   }
  return (
    <ImageBackground blurRadius={10} source={require("../../assets/homeBck.jpg")} style={styles.imgContainer}>
      <View  style={styles.container}>
     <View style={styles.container2}>
     <Text style={styles.header}>من فضلك اختر من القائمة وابدأ التسبيح</Text>
     <View style={styles.btnContainer}>
       <TasbehButton  text="سبحان الله" handleBtn={()=>handleBtn("سبحان الله")} />
       <TasbehButton  text="الحمدلله" handleBtn={()=>handleBtn("الحمدلله")} />
       <TasbehButton  text="لا إله إلا الله" handleBtn={()=>handleBtn("لا إله إلا الله")} />
       <TasbehButton  text="الله أكبر" handleBtn={()=>handleBtn("الله أكبر")} />
       <TasbehButton  text="لا حول ولا قوة إلا بالله" handleBtn={()=>handleBtn("لا حول ولا قوة إلا بالله")} />
       <TasbehButton  text="استغفر الله" handleBtn={()=>handleBtn("استغفر الله")} />
     </View>
     <Text style={styles.tasbeh}>{tasbeh}</Text>
     <Text style={styles.counter}>{counter}</Text>
    <TasbehButton text="اضغط للتسبيح" handleBtn={handleCounter} />
     </View>
   </View>

    </ImageBackground>
     )
}
export default Counter;

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
  backgroundImage: {
    flex: 1,
   resizeMode: "cover",
  },
  container2:{
    width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        position:"absolute",
        display:"flex",
       flexDirection:"column",
       justifyContent:"space-between",
       alignItems:"center",
       paddingTop:45,
       paddingBottom:30
  },
  header:{
    height:30,
    fontSize:20,
    fontWeight: "bold",
    color: "#ffa90f",
  },
  btnContainer:{
    display:"flex",
    flexDirection:"row-reverse",
    flexWrap:"wrap",
    padding:15,
    justifyContent:"center",
    marginBottom:50,
    marginTop:20
  },
  tasbeh:{
    fontSize:25,
    fontWeight:"bold",
    color:"#ffa90f",
    marginBottom:10
  },
  counter:{
    fontSize:30,
    fontWeight:"bold",
    color:"#ffa90f",
    marginBottom:15
  }
});