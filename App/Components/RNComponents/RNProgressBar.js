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
    backgroundColor = Colors.primaryText,
  } = props;

  const styles = useMemo(() => {
    return {
      container: {
        backgroundColor: backgroundColor,
        height: 4,
        width: "100%",
        flexDirection: "row",
      },
      progress: {
        width: `${progress}%`,
        height: 4 * WIDTH_RATIO,
        backgroundColor: Colors.primaryRed,
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
      <Animatable.View style={styles.progress} ref={progressRef} />
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
