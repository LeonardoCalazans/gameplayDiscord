import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { categories } from "../../ultis";

import Category from "../Category";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

const CategorySelect = ({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}: Props) => {
  return (
    <ScrollView
      testID="category-select"
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
};

export default CategorySelect;
