import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { TrainerLargeCardItemStyle } from "./TrainerLargeCardItemStyle";
import PropTypes from "prop-types";
import FastImage from "../RNComponents/FastImage";
import IconPlay from "Assets/Images/Icons/IconPlayWhite.png";
import ProgramTag from "../ProgramCardItem/ProgramTag";
import { useThemeSvgs } from "../../Hooks/useThemeSvgs";

function TrainerLargeCardItem(props) {
  const { styles, item, onPress, onPlayPress } = props;
  const {
    display_name,
    description,
    thumbnailSource,
    videoSource,
    transformedCategories,
  } = item;

  const Svgs = useThemeSvgs();

  const mainCategories =
    transformedCategories.length > 0 ? transformedCategories[0] : null;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress.bind(this, item)}>
      <ImageBackground
        source={thumbnailSource}
        style={styles.imageBackground}
        imageStyle={styles.image}>
        {videoSource && (
          <TouchableOpacity
            style={styles.thumbnailTouchable}
            onPress={onPlayPress.bind(this, item)}>
            <View style={styles.controlButton}>
              <FastImage
                source={IconPlay}
                style={styles.controlIcon}
                resizeMode="contain"
                resizeMethod="resize"
              />
            </View>
          </TouchableOpacity>
        )}
      </ImageBackground>
      <View style={styles.main}>
        <Text style={styles.h7} numberOfLines={1}>
          {display_name}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.tagContainer}>
          {mainCategories && (
            <ProgramTag
              IconComponent={Svgs.Trainer.calisthenics}
              text={mainCategories.category_title}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

TrainerLargeCardItem.propTypes = {
  onPress: PropTypes.func.isRequired,
};

TrainerLargeCardItem.defaultProps = {
  onPress: () => {},
};

export default compose(TrainerLargeCardItemStyle)(TrainerLargeCardItem);
