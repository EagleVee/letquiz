import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { WorkoutCalendarStyle } from "./WorkoutCalendarStyle";
import PropTypes from "prop-types";
import TimeService from "Services/TimeService";
import { extract } from "Utils/keyExtractor";
import I18n from "Locales";
import { WIDTH_RATIO } from "Themes/Metrics";
import Checkbox from "Components/Checkbox/Checkbox";

function WorkoutCalendar(props) {
  const {
    styles,
    calendarItemStyle,
    calendarTitleStyle,
    calendarDayTextStyle,
  } = props;
  const weekDays = TimeService.getCurrentWeekDays();
  const today = TimeService.getCurrentDeviceDay();
  const month = TimeService.getCurrentMonth();
  const year = TimeService.getCurrentYear();

  function renderItem({ item, index }) {
    const { title, day } = item;
    const isToday = day === today;
    const isDone = index < 2;
    return (
      <View style={calendarItemStyle(isToday)}>
        <Text style={calendarTitleStyle(isToday)}>{I18n.t(title)}</Text>
        {isDone ? (
          <Checkbox size={20 * WIDTH_RATIO} check={true} />
        ) : (
          <Text style={calendarDayTextStyle(isToday)}>{day}</Text>
        )}
      </View>
    );
  }

  function onDayOffPress() {}

  return (
    <View style={styles.container}>
      <Text style={styles.h8Bold}>
        {I18n.t("Month." + month)}
        {year}
      </Text>
      <FlatList
        data={weekDays}
        numColumns={7}
        style={styles.list}
        columnWrapperStyle={styles.columnWrapper}
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={extract}
      />
      {/*<TouchableOpacity onPress={onDayOffPress} style={styles.dayOffButton}>*/}
      {/*  <Text style={styles.dayOffText}>{I18n.t("WorkOut.TakeADayOff")}</Text>*/}
      {/*</TouchableOpacity>*/}
    </View>
  );
}

WorkoutCalendar.propTypes = {
  navigation: PropTypes.any,
};

WorkoutCalendar.defaultProps = {};

export default compose(WorkoutCalendarStyle)(WorkoutCalendar);
