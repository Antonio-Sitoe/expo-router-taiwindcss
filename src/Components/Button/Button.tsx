import { Text } from "react-native";
import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import { styled } from "nativewind";

function ButtonStyled({ ...rest }) {
  return (
    <TouchableOpacity
      {...rest}
      className="h-14 w-full bg-green rounded-md items-center justify-center"
    >
      <Text className="text-white">Button</Text>
    </TouchableOpacity>
  );
}

const Button = styled(ButtonStyled);

export default Button;
