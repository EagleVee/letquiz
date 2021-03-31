import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { WorkoutOutstandingTrainerStyle } from "./WorkoutOutstandingTrainerStyle";
import PropTypes from "prop-types";
import BlockTitle from "Components/Dividers/BlockTitle";
import I18n from "Locales";
import { RNFlatList, RNScrollView } from "Components/RNComponents";
import TrainerCardItem from "Components/TrainerCardItem/TrainerCardItem";
import TransformHelper from "Utils/TransformHelper";
import TrainerTransform from "Transforms/TrainerTransform";
import BlockDivider from "Components/Dividers/BlockDivider";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { WIDTH_RATIO } from "../../../Themes/Metrics";

function WorkoutOutstandingTrainer(props) {
  const { styles } = props;
  const NavigationMethods = useNavigationMethods();

  function onItemPress(item) {
    NavigationMethods.goToScreen("TrainerDetailScreen", {
      trainer: item,
    });
  }

  function renderItem({ item }) {
    return <TrainerCardItem item={item} onPress={onItemPress} />;
  }
  return (
    <View style={styles.container}>
      <BlockDivider height={39 * WIDTH_RATIO} />
      <BlockTitle title={I18n.t("WorkOut.OutstandingTrainer")} />
      <RNFlatList
        data={TransformHelper.transformData(
          [{}, {}, {}, {}, {}],
          TrainerTransform,
        )}
        scrollEnabled={false}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

WorkoutOutstandingTrainer.propTypes = {
  onPress: PropTypes.func.isRequired,
};

WorkoutOutstandingTrainer.defaultProps = {
  onPress: () => {},
};

export default compose(WorkoutOutstandingTrainerStyle)(
  WorkoutOutstandingTrainer,
);
