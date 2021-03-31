import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { compose } from "ramda";
import { WorkoutNewProgramBlockStyle } from "./WorkoutNewProgramBlockStyle";
import BlockTitle from "Components/Dividers/BlockTitle";
import I18n from "Locales";
import ProgramCardItem from "Components/ProgramCardItem/ProgramCardItem";
import { WithProgramFetch } from "Business/WithProgramFetch";
import { RNFlatList } from "Components/RNComponents";
import BlockDivider from "Components/Dividers/BlockDivider";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useNavigationMethods } from "Hooks/useNavigationMethods";

function WorkoutNewProgramBlock(props) {
  const { styles, program } = props;
  const { newPrograms } = program;
  const NavigationMethods = useNavigationMethods();

  function onItemPress(item) {
    NavigationMethods.goToProgramDetail(item);
  }

  function renderCardItem({ item }) {
    return <ProgramCardItem item={item} onPress={onItemPress} size="large" />;
  }

  return (
    <View style={styles.container}>
      <BlockDivider height={39 * WIDTH_RATIO} />
      <BlockTitle title={I18n.t("WorkOut.LatestPrograms")} />
      <RNFlatList
        data={newPrograms}
        renderItem={renderCardItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

WorkoutNewProgramBlock.propTypes = {};

WorkoutNewProgramBlock.defaultProps = {};

export default compose(
  WorkoutNewProgramBlockStyle,
  WithProgramFetch,
)(WorkoutNewProgramBlock);
