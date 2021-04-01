import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { WorkoutWeekSessionBlockStyle } from "./WorkoutWeekSessionBlockStyle";
import PropTypes from "prop-types";
import BlockDivider from "Components/Dividers/BlockDivider";
import { useSelector } from "react-redux";
import BlockTitle from "Components/Dividers/BlockTitle";
import I18n from "Locales";
import { RNFlatList } from "Components/RNComponents";
import TransformHelper from "Utils/TransformHelper";
import SessionTransform from "Transforms/SessionTransform";
import SessionCardItem from "Components/SessionCardItem/SessionCardItem";

function WorkoutWeekSessionBlock(props) {
  const { styles, NavigationMethods } = props;
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  function onItemPress(item) {}

  function renderItem({ item }) {
    return <SessionCardItem item={item} onPress={onItemPress} />;
  }

  return isAuthenticated ? (
    <View style={styles.container}>
      <BlockDivider />
      <BlockTitle title={I18n.t("WorkOut.YourSessionsThisWeek")} />
      <RNFlatList
        data={TransformHelper.transformData([{}, {}, {}, {}], SessionTransform)}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.listContent}
      />
    </View>
  ) : null;
}

WorkoutWeekSessionBlock.propTypes = {};

WorkoutWeekSessionBlock.defaultProps = {};

export default compose(WorkoutWeekSessionBlockStyle)(WorkoutWeekSessionBlock);
