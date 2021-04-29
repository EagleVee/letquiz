import React, { forwardRef } from "react";
import { FlatList, FlatListProps } from "react-native";
import { extract } from "Utils/keyExtractor";
import { WIDTH_RATIO } from "Themes/Metrics";
import ListDivider from "../Dividers/ListDivider";

function RNFlatList(props: FlatListProps, ref) {
  const {
    dividerWidth = 16 * WIDTH_RATIO,
    dividerHeight = 16 * WIDTH_RATIO,
    dividerColor = "transparent",
  } = props;

  function renderDivider() {
    return (
      <ListDivider
        width={dividerWidth}
        height={dividerHeight}
        backgroundColor={dividerColor}
      />
    );
  }

  return (
    <FlatList
      ref={ref}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      keyExtractor={extract}
      ItemSeparatorComponent={renderDivider}
      {...props}
    />
  );
}

export default forwardRef(RNFlatList);
