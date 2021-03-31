import { ApplicationStyles } from "Themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    ...ApplicationStyles.text.h9,
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.6)",
    textDecorationLine: "underline",
  },
});
