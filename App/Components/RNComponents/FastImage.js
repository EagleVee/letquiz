import React from "react";
import RNFastImage from "react-native-fast-image";
import { ImageProps, View } from "react-native";
import { normalisedSource } from "../../Utils/helperFunctions";

export default function FastImage(props: ImageProps) {
  return <RNFastImage {...props} source={normalisedSource(props.source)} />;
}
