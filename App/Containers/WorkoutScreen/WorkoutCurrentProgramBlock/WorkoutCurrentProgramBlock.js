import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { WorkoutCurrentProgramBlockStyle } from "./WorkoutCurrentProgramBlockStyle";
import BlockDivider from "Components/Dividers/BlockDivider";
import BlockTitle from "Components/Dividers/BlockTitle";
import I18n from "Locales";
import { RNFlatList } from "Components/RNComponents";
import ProgramCardItem from "Components/ProgramCardItem/ProgramCardItem";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { WIDTH_RATIO } from "Themes/Metrics";
import { WithProgramFetch } from "Business/WithProgramFetch";

function WorkoutCurrentProgramBlock(props) {
  const { styles, program } = props;
  const { subscribedPrograms } = program;
  const NavigationMethods = useNavigationMethods();

  function onItemPress(item) {
    NavigationMethods.goToProgramDetail(item);
  }

  function renderItem({ item }) {
    return <ProgramCardItem item={item} onPress={onItemPress} showProgress />;
  }

  return (
    subscribedPrograms.length > 0 && (
      <View style={styles.container}>
        <BlockDivider height={39 * WIDTH_RATIO} />
        <BlockTitle title={I18n.t("WorkOut.CurrentPrograms")} />
        <RNFlatList
          data={subscribedPrograms}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={styles.listContent}
        />
      </View>
    )
  );
}

WorkoutCurrentProgramBlock.propTypes = {};

WorkoutCurrentProgramBlock.defaultProps = {};

export default compose(
  WorkoutCurrentProgramBlockStyle,
  WithProgramFetch,
)(WorkoutCurrentProgramBlock);
