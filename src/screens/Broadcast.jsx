import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from "react-native";
import { Audio } from 'expo-av';


 function Broadcast({navigation}) {
    const [sound,setSound]= useState();
    const [soundStatus,setSoundStatus]= useState("stoped");
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);

      async function _playRecording() {
        if(sound == null && soundStatus === "stoped"){
          const { sound } = await Audio.Sound.createAsync(
            { uri: "http://n07.radiojar.com/8s5u5tpdtwzuv?listening-from-radio-garden=1648187230&rj-tok=AAABf7-mbX8AZ2OEmiCzrooJuQ&rj-ttl=5" },
            {
              shouldPlay: true,
              isLooping: false,
            },
            );
            setSound(sound);
            setSoundStatus("played")
          }
          else
            alert('already played');
      }

      async function _stopRecording() {
        if (sound != null && soundStatus == 'played') {
            await sound.unloadAsync();
            setSoundStatus("stoped")
            setSound(null)
        }
        else
        alert('already stoped');
      }

      useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

  return (
    <ImageBackground blurRadius={10} source={require("../../assets/homeBck.jpg")} style={styles.imgContainer}>
      <View style={styles.container}>
        <View style={styles.player}>
        <TouchableOpacity style={styles.btn} onPress={_playRecording}>
          <Image source={require("../../assets/play.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={_stopRecording}>
        <Image source={require("../../assets/stop.png")}></Image>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}
export default Broadcast;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    height:"100%"
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
  player:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    width:"60%",
    padding:10
  },
  btn:{
    margin:5
  }
})