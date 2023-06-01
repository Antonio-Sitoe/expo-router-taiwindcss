import { useEffect } from "react";
import { View, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function ProgressBar({ value, onMoveTop }) {
  const widthContainer = useSharedValue(200);
  const endReached = value >= 95;
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value,
    };
  });

  useEffect(() => {
    widthContainer.value = withSpring(endReached ? 56 : 200, { mass: 0.7 });
  }, [value]);

  return (
    <Animated.View
      style={animatedStyle}
      className={`h-[56] bg-gray absolute bottom-1 self-center rounded-full justify-center items-center flex-row px-2`}
    >
      {endReached ? (
        <TouchableOpacity onPress={onMoveTop}>
          <Feather name="arrow-up" color="#c4c4c4" size={24} />
        </TouchableOpacity>
      ) : (
        <>
          <Text className="text-white mr-1">{value.toFixed(0)}%</Text>
          <View className="h-2 flex-1 rounded-full bg-slate-700">
            <View
              className="h-2 bg-[#5267e5] rounded-full"
              style={{ width: `${value}%` }}
            />
          </View>
        </>
      )}
    </Animated.View>
  );
}

export default ProgressBar;
