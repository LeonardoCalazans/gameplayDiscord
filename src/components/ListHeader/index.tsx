import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

const ListHeader = ({ title, subtitle }: Props) => {
  return (
    <View style={styles.container} testID="listHeader">
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default ListHeader;
