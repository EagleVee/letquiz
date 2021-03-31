import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { ProgramCardItemStyle } from "./ProgramCardItemStyle";
import PropTypes from "prop-types";
import PrimaryGradientBackground from "../Backgrounds/PrimaryGradientBackground";
import { WIDTH_RATIO } from "Themes/Metrics";
import FastImage from "../RNComponents/FastImage";
import ProgramTag from "./ProgramTag";
import Line from "../Dividers/Line";
import I18n from "Locales";
import ProgressBar from "../ProgressBar/ProgressBar";
import IconLockWhite from "Assets/Svgs/SharedIcons/IconLockWhite.svg";
import { PropTypesValue } from "Utils/type";
import { useThemeSvgs } from "Hooks/useThemeSvgs";
import { RNTouchableOpacity } from "../RNComponents";

function ProgramCardItem(props) {
  const { styles, item, onPress, showProgress, showTrainer } = props;
  const {
    program_title,
    program_duration,
    program_duration_unit,
    transformedTrainer,
    isLocked,
    thumbnailSource,
    displayLevel,
    percentage_progress,
  } = item;

  const Svgs = useThemeSvgs();

  return (
    <RNTouchableOpacity
      style={styles.container}
      onPress={onPress.bind(this, item)}>
      <View>
        <FastImage
          source={thumbnailSource}
          style={styles.thumbnail}
          onError={error => {
            console.log("IMAGE ERROR", error);
          }}
        />
        {showProgress && (
          <ProgressBar
            style={styles.progressBar}
            progress={percentage_progress}
          />
        )}
      </View>
      <View style={styles.main}>
        <Text style={styles.title} numberOfLines={2}>
          {program_title}
        </Text>
        <View style={styles.tagContainer}>
          <ProgramTag
            IconComponent={Svgs.Program.CalendarSimpleTag}
            text={
              program_duration + " " + I18n.t("Unit." + program_duration_unit)
            }
          />
          <ProgramTag
            IconComponent={Svgs.Program.LevelSimpleTag}
            text={I18n.t(displayLevel)}
          />
        </View>
        {showTrainer && (
          <View>
            <Line />
            <View style={styles.footer}>
              <FastImage
                source={transformedTrainer.avatarSource}
                style={styles.trainerAvatar}
              />
              <Text style={styles.trainerTitle} numberOfLines={1}>
                {transformedTrainer.display_name}
              </Text>
            </View>
          </View>
        )}
      </View>
      {isLocked && (
        <View style={styles.lockContainer}>
          <PrimaryGradientBackground size={40 * WIDTH_RATIO}>
            <IconLockWhite width={24 * WIDTH_RATIO} height={24 * WIDTH_RATIO} />
          </PrimaryGradientBackground>
        </View>
      )}
    </RNTouchableOpacity>
  );
}

ProgramCardItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  showProgress: PropTypes.bool,
  showTrainer: PropTypes.bool,
  size: PropTypes.oneOf(["normal", "large"]),
  containerStyle: PropTypesValue.style,
  inverseColor: PropTypes.bool,
};

ProgramCardItem.defaultProps = {
  onPress: () => {},
  showProgress: false,
  showTrainer: true,
  size: "normal",
  containerStyle: {},
  inverseColor: false,
};

export default compose(ProgramCardItemStyle)(ProgramCardItem);
