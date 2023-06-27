import React, { useEffect, useRef, useState } from "react";
import { Pressable, View, Text, Alert, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import { Link } from "expo-router";

export default function Page() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [recordingFileUri, setRecordingFileUri] = useState<string | null>(null);

  async function handleRecordingStart() {
    const { granted } = await Audio.getPermissionsAsync();

    if (granted) {
      try {
        const { recording } = await Audio.Recording.createAsync();
        setRecording(recording);
      } catch (error) {
        console.log(error);
        Alert.alert("Erro ao gravar", "Nao foi possivel gravar");
      }
    }
  }

  async function hadleRecordStop() {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const fileUri = recording.getURI();
        setRecordingFileUri(fileUri);
        setRecording(null);
        console.log("FILE URI", fileUri);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Erro ao parar a gravacao");
    }
  }
  async function handleAudioPlay() {
    if (recordingFileUri) {
      const { sound } = await Audio.Sound.createAsync(
        { uri: recordingFileUri },
        { shouldPlay: true }
      );
      await sound.setPositionAsync(0);
      await sound.playAsync();
    }
  }
  useEffect(() => {
    Audio.requestPermissionsAsync().then(({ granted }) => {
      if (granted) {
        Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          interruptionModeIOS: InterruptionModeIOS.DoNotMix,
          interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: true,
        });
      }
    });
  }, []);
  return (
    <View className="flex-1 items-center justify-center">
      <Pressable
        onPressIn={handleRecordingStart}
        onPressOut={hadleRecordStop}
        className={`w-[94] h-[94] rounded-full ${
          recording ? "bg-lime-400" : "bg-[#d6d6d6]"
        } items-center justify-center`}
      >
        <MaterialIcons name="mic" size={44} color="#252525" />
      </Pressable>
      {recording && (
        <Text className="font-bold text-lg mt-5 mb-5">Gravando...</Text>
      )}
      {recordingFileUri && (
        <Button onPress={handleAudioPlay} title="Ouvir o audio" />
      )}
      <Link href="/about">about</Link>
    </View>
  );
}
