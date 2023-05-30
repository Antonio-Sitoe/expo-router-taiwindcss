import { View, Text } from "react-native";

function ProgressBar({ value }) {
  return (
    <View className="w-[200] h-[56] bg-gray absolute bottom-1 self-center rounded-full justify-center items-center flex-row px-2">
      <Text className="text-white mr-1">{value}%</Text>
      <View className="h-2 flex-1 rounded-full bg-slate-700">
        <View
          className="h-2 bg-[#5267e5] rounded-full"
          style={{ width: `${value}%` }}
        />
      </View>
    </View>
  );
}

export default ProgressBar;
