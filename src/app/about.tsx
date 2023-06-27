import { StatusBar, Text, useWindowDimensions } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProgressBar from "../Components/ProgressBar";
import { useRef, useState } from "react";
import { Link } from "expo-router";

interface ScrollProps {
  nativeEvent: {
    layoutMeasurement: {
      height: number;
    };
    contentOffset: {
      y: number;
    };
    contentSize: {
      height: number;
    };
  };
}

export default function Page() {
  const [percentage, setPercentage] = useState(0);
  const scrollRef = useRef<ScrollView>();

  const Dimentions = useWindowDimensions();
  function handleScroll(PROPS: ScrollProps) {
    const { contentOffset, contentSize, layoutMeasurement } = PROPS.nativeEvent;
    const visableContent = Math.ceil(
      (Dimentions.height / contentSize.height) * 100
    );
    const newPercentage =
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;
    setPercentage(newPercentage < visableContent ? 0 : newPercentage);
  }
  function handleonMoveTop() {
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View className="flex-1 bg-black p-4 pt-10">
        <Link href="/contato" className="text-white">
          contato
        </Link>
        <ScrollView className="pt-6 pb-6" onScroll={handleScroll}>
          <Text className="text-white font-bold text-3xl">Sobre o app</Text>
          <View>
            <Text className="text-lg my-5 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              adipisci sint? In soluta cum provident consequuntur architecto.
              Aut dolor iure, voluptatum amet quas fuga nostrum. Illum animi
              praesentium reprehenderit aliquam!
            </Text>
            <Text className="text-lg my-5 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              adipisci sint? In soluta cum provident consequuntur architecto.
              Aut dolor iure, voluptatum amet quas fuga nostrum. Illum animi
              praesentium reprehenderit aliquam!
            </Text>
            <Text className="text-lg my-5 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              adipisci sint? In soluta cum provident consequuntur architecto.
              Aut dolor iure, voluptatum amet quas fuga nostrum. Illum animi
              praesentium reprehenderit aliquam!
            </Text>
            <Text className="text-lg my-5 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              adipisci sint? In soluta cum provident consequuntur architecto.
              Aut dolor iure, voluptatum amet quas fuga nostrum. Illum animi
              praesentium reprehenderit aliquam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed, adipisci sint? In soluta cum
              provident consequuntur architecto. Aut dolor iure, voluptatum amet
              quas fuga nostrum. Illum animi praesentium reprehenderit aliquam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              adipisci sint? In soluta cum provident consequuntur architecto.
              Aut dolor iure, voluptatum amet quas fuga nostrum. Illum animi
              praesentium reprehenderit aliquam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed, adipisci sint? In soluta cum
              provident consequuntur architecto. Aut dolor iure, voluptatum amet
              quas fuga nostrum. Illum animi praesentium reprehenderit aliquam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              adipisci sint? In soluta cum provident consequuntur architecto.
              Aut dolor iure, voluptatum amet quas fuga nostrum. Illum animi
              praesentium reprehenderit aliquam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed, adipisci sint? In soluta cum
              provident consequuntur architecto. Aut dolor iure, voluptatum amet
              quas fuga nostrum. Illum animi praesentium reprehenderit aliquam!
            </Text>
            <Text className="text-lg my-5 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              adipisci sint? In soluta cum provident consequuntur architecto.
              Aut dolor iure, voluptatum amet quas fuga nostrum. Illum animi
              praesentium reprehenderit aliquam!
            </Text>
          </View>
        </ScrollView>
        <ProgressBar onMoveTop={handleonMoveTop} value={percentage} />
      </View>
    </>
  );
}
