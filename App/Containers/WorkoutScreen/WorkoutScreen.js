import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { WorkoutScreenStyle } from "./WorkoutScreenStyle";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";
import WorkoutCalendar from "./WorkoutCalendar/WorkoutCalendar";
import WorkoutNewProgramBlock from "./WorkoutNewProgramBlock/WorkoutNewProgramBlock";
import WorkoutWeekSessionBlock from "./WorkoutWeekSessionBlock/WorkoutWeekSessionBlock";
import WorkoutCurrentProgramBlock from "./WorkoutCurrentProgramBlock/WorkoutCurrentProgramBlock";
import I18n from "../../Locales";
import { WithHomeFetch } from "../../Business/WithHomeFetch";
import { WithProgramFetch } from "../../Business/WithProgramFetch";
import { WithTrainerFetch } from "../../Business/WithTrainerFetch";
import TimeService from '../../Services/TimeService';

function WorkoutScreen(props) {
  const { styles } = props;
  const period = TimeService.getCurrentPeriod();
  return (
    <Container>
      <RNScrollView style={styles.container}>
        <Text style={styles.greeting}>{I18n.t("WorkOut.Greeting." + period)}</Text>
        <WorkoutCalendar />
        <WorkoutWeekSessionBlock />
        <WorkoutCurrentProgramBlock />
        <WorkoutNewProgramBlock />
      </RNScrollView>
    </Container>
  );
}

export default compose(
  WorkoutScreenStyle,
  WithProgramFetch,
  WithTrainerFetch,
  WithHomeFetch,
)(WorkoutScreen);
