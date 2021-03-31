import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { SubscriptionPlanItemStyle } from "./SubscriptionPlanItemStyle";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox/Checkbox";
import I18n from "../../Locales";
import BlockDivider from "../Dividers/BlockDivider";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import { formatCurrencyWithVNDSymbol } from "../../Utils/currencyFormatter";

function SubscriptionPlanItem(props) {
  const {
    styles,
    item,
    index,
    onPlanPress,
    isSelected,
    isSelectable = false,
  } = props;

  const { monthlyPrice, duration, discount, originalPrice, price } = item;
  const formattedOriginalPrice = formatCurrencyWithVNDSymbol(originalPrice);
  const formattedPrice = formatCurrencyWithVNDSymbol(price);
  const formattedMonthlyPrice = formatCurrencyWithVNDSymbol(monthlyPrice);

  return (
    <TouchableOpacity
      style={styles.planItem}
      disabled={!isSelectable}
      onPress={onPlanPress.bind(this, item, index)}>
      {isSelectable && (
        <View style={styles.row}>
          <Checkbox check={isSelected} outline={true} />
          <BlockDivider height={0} width={12 * WIDTH_RATIO} />
        </View>
      )}
      <View style={styles.planInfo}>
        <View style={styles.centerRow}>
          <Text style={styles.monthlyPrice}>
            {formattedMonthlyPrice}/{I18n.t("Unit.month")}
          </Text>
          {discount > 0 ? (
            <View style={styles.discountInformationContainer}>
              <View style={styles.discountContainer}>
                <Text style={styles.discountText}>
                  {I18n.t("RegularTerm.Discount")} {discount}%
                </Text>
              </View>
              <Text style={styles.originalPrice}>{formattedOriginalPrice}</Text>
            </View>
          ) : (
            <View />
          )}
        </View>
        <View style={styles.centerRow}>
          <Text style={styles.h6}>{duration}</Text>
          <Text style={styles.price}>{formattedPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

SubscriptionPlanItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPlanPress: PropTypes.func,
  isSelectable: PropTypes.bool,
  isSelected: PropTypes.bool,
};

SubscriptionPlanItem.defaultProps = {
  onPlanPress: () => {},
  isSelectable: false,
  isSelected: false,
};

export default compose(SubscriptionPlanItemStyle)(SubscriptionPlanItem);
