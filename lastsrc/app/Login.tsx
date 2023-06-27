import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Colors from "tailwindcss/colors";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-black w-full p-8">
      <Feather name="home" size={34} color={Colors.cyan[600]} />
      <Text className="text-cyan-600 text-2xl font-bold">Hello</Text>
      <TextInput className="border-2 text-white px-4 mt-4 w-full border-white  rounded-md h-12 border-solid focus:border-cyan-600" />
      <TextInput className="border-2 text-white px-4 mt-4  w-full border-white  rounded-md h-12 border-solid focus:border-cyan-600" />
      {/* <View className="w-12 h-12 bg-red-200 rounded-md bg-cyan-600" /> */}
      <Link href="/about" asChild>
        <TouchableOpacity className="h-14 w-[360] mt-6 bg-green rounded-md items-center justify-center">
          <Text className="text-white">Pagina Sobre</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
