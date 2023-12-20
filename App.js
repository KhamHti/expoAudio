import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import { Component } from "react";

export default class App extends Component() {
  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true,
    });

    this.sound = new Audio.Sound();

    const status = {
      shouldPlay: false,
    };

    this.sound.loadAsync(require("./assets/lofi_hiphop.mp3"), status, false);
  }

  playSound() {
    this.sound.loadAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Play sound"
          color="#3cbbb1"
          onPress={this.playsound.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
