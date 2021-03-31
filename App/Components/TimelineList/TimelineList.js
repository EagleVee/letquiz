import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { TimelineListStyle } from "./TimelineListStyle";
import PropTypes from "prop-types";
import { RNFlatList } from "../RNComponents";
import Checkbox from "../Checkbox/Checkbox";
import { FlatListProps } from "react-native";

function TimelineList(props: FlatListProps) {
  const {
    styles,
    data,
    renderItem,
    checkKey,
    getTimelineLineStyle,
    ...otherProps
  } = props;

  function renderTimelineItem({ item, index }) {
    const isFirst = index === 0;
    const isLast = index === data.length - 1;
    const isCompleted = item[checkKey] && item[checkKey] === true;
    const isPreviousDone =
      isFirst || (data[index - 1] && data[index - 1][checkKey] === true);
    const isNextDone =
      isLast || (data[index + 1] && data[index + 1][checkKey] === true);

    return (
      <View style={styles.item}>
        <View style={styles.checkBoxContainer}>
          {isFirst ? (
            <View style={styles.timelinePlaceholder} />
          ) : (
            <View style={getTimelineLineStyle(isCompleted, isPreviousDone)} />
          )}
          <Checkbox outline check={isCompleted} />
          {isLast ? (
            <View style={styles.timelinePlaceholder} />
          ) : (
            <View style={getTimelineLineStyle(isCompleted, isNextDone)} />
          )}
        </View>
        {renderItem({ item, index })}
      </View>
    );
  }

  return (
    <RNFlatList data={data} renderItem={renderTimelineItem} {...otherProps} />
  );
}

TimelineList.propTypes = {
  onPress: PropTypes.func.isRequired,
};

TimelineList.defaultProps = {
  onPress: () => {},
};

export default compose(TimelineListStyle)(TimelineList);
