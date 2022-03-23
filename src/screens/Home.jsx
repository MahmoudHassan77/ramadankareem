import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Audio } from 'expo-av';

function Home({navigation}) {
  const [sound, setSound] = useState();
  
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/hello.mp3")
    );
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
    navigation.navigate('Content');
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);


  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/homeBck.jpg")}
        style={styles.backgroundImage}
      />
      <TouchableOpacity style={styles.homeBtn} onPress={playSound}>
        <Image
          source={require("../../assets/homeIcon.png")}
          style={styles.homeIcon}
        />
        <Text style={styles.text}>اربط الحزام</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeBtn: {
    position: "absolute",
  },
  homeIcon: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffa90f",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
});
