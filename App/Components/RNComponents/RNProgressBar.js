import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import PropTypes from "prop-types";
import { WIDTH_RATIO } from "Themes/Metrics";
import * as Animatable from "react-native-animatable";
import { usePrevious } from "Hooks/usePrevious";
import { useThemeColors } from "Hooks/useThemeColors";

function RNProgressBar(props) {
  const Colors = useThemeColors();
  const prevProps = usePrevious(props);
  const {
    progress,
    animationDuration,
    backgroundColor = Colors.primaryGrey,
    progressColor = Colors.progress,
    showThumb = true,
  } = props;

  const styles = useMemo(() => {
    return {
      container: {
        backgroundColor: backgroundColor,
        height: 2 * WIDTH_RATIO,
        width: "100%",
        flexDirection: "row",
      },
      progress: {
        width: `${progress}%`,
        height: 2 * WIDTH_RATIO,
        backgroundColor: progressColor,
      },
      progressThumb: {
        position: "absolute",
        right: -4 * WIDTH_RATIO,
        top: -3 * WIDTH_RATIO,
        width: 8 * WIDTH_RATIO,
        height: 8 * WIDTH_RATIO,
        borderRadius: 4 * WIDTH_RATIO,
        backgroundColor: progressColor,
      },
    };
  }, []);

  const progressRef = useRef();

  useEffect(() => {
    const prevProgress =
      prevProps && prevProps.progress ? prevProps.progress : 0;
    progressRef.current.animate(
      {
        0: { width: `${prevProgress}%` },
        1: { width: `${progress}%` },
      },
      animationDuration,
    );
  }, [progress]);
  return (
    <View style={styles.container}>
      <Animatable.View style={styles.progress} ref={progressRef}>
        {showThumb && <View style={styles.progressThumb} />}
      </Animatable.View>
    </View>
  );
}

RNProgressBar.propTypes = {
  onPress: PropTypes.func.isRequired,
  animationDuration: PropTypes.number,
};

RNProgressBar.defaultProps = {
  onPress: () => {},
  animationDuration: 300,
};

export default RNProgressBar;
