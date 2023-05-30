import { StatusBar, Text } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProgressBar from "../Components/Button/ProgressBar";

export default function Page() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View className="flex-1 bg-black p-4 pt-10">
        <ScrollView className="pt-6 pb-6">
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
        <ProgressBar value={90} />
      </View>
    </>
  );
}
