import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeStyles } from "Hooks/useThemeStyles";
import { useThemeColors } from "Hooks/useThemeColors";
import { DARK_THEME } from "../../Config/Themes";
import { Fonts } from "../../Themes";

export const SubscriptionPlanItemStyle = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const { containerStyle = {} } = props;
  const styles = StyleSheet.create({
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
    planItem: {
      width: "100%",
      paddingHorizontal: 12 * WIDTH_RATIO,
      paddingVertical: 14 * WIDTH_RATIO,
      borderRadius: 16 * WIDTH_RATIO,
      backgroundColor: Colors.cardBackground,
      ...ApplicationStyles.themedShadow,
      ...ApplicationStyles.utils.centerRow,
      ...containerStyle,
    },
    planInfo: {
      flex: 1,
    },
    discountInformationContainer: {
      flex: 1,
      justifyContent: "flex-end",
      ...ApplicationStyles.utils.centerRow,
    },
    discountContainer: {
      marginRight: 10 * WIDTH_RATIO,
      backgroundColor: Colors.payment.discountContainer,
      paddingHorizontal: 8 * WIDTH_RATIO,
      height: 20 * WIDTH_RATIO,
      borderRadius: 10 * WIDTH_RATIO,
      ...ApplicationStyles.utils.middle,
    },
    discountText: {
      ...ApplicationStyles.text.h9,
      color: Colors.payment.discountText,
    },
    originalPrice: {
      fontFamily: Fonts.type.italicFont,
      fontSize: 13 * WIDTH_RATIO,
      textDecorationLine: "line-through",
      color: Colors.payment.originalPrice,
    },
    noDiscount: {
      fontFamily: Fonts.type.italicFont,
      fontSize: 13 * WIDTH_RATIO,
      textDecorationLine: "line-through",
      color: Colors.payment.originalPrice,
    },
    price: {
      ...ApplicationStyles.text.h6,
      flex: 1,
      textAlign: "right",
    },
    monthlyPrice: {
      ...ApplicationStyles.text.h9,
      color: Colors.oldTitle,
    },
  });

  return <OriginalComponent {...props} styles={styles} />;
};
