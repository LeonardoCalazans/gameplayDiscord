import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

const ButtonAdd = ({ ...rest }: RectButtonProps) => {
  return (
    <RectButton style={styles.container} testID="buttonAdd" {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  );
};

export default ButtonAdd;
