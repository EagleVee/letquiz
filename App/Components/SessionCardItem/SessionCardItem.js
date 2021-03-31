import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { SessionCardItemStyle } from "./SessionCardItemStyle";
import PropTypes from "prop-types";
import FastImage from "../RNComponents/FastImage";
import I18n from "Locales";
import Line from "../Dividers/Line";
import { WIDTH_RATIO } from "Themes/Metrics";
import IconClock from "Assets/Svgs/LightIcons/IconClock.svg";
import images from "../../Themes/Images";

function SessionCardItem(props) {
  const { styles, item, onPress } = props;
  // const { displayDuration, title, program, unit } = item;
  // const { trainer } = program;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress.bind(this, item)}>
      <View style={styles.main}>
        <View style={styles.centerRow}>
          <View style={styles.iconTimeContainer}>
            <IconClock width={24 * WIDTH_RATIO} height={24 * WIDTH_RATIO} />
          </View>
          <Text style={styles.duration}>
            {45 + " " + I18n.t("Unit." + "minutes")}
          </Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {"Barbell Bench Press - Đẩy tạ trên ghế - Tập ngực giữa"}
        </Text>
        <Text style={styles.programTitle} numberOfLines={2}>
          {"Lịch 4 tuần tập calisthenics dành cho trình độ cao"}
        </Text>
        <Line />
        <View style={styles.footer}>
          <FastImage source={images.placeholder} style={styles.trainerAvatar} />
          <Text style={styles.trainerTitle} numberOfLines={1}>
            {"Chris Heria"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

SessionCardItem.propTypes = {
  onPress: PropTypes.func.isRequired,
};

SessionCardItem.defaultProps = {
  onPress: () => {},
};

export default compose(SessionCardItemStyle)(SessionCardItem);
