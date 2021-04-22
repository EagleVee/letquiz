import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { compose } from "ramda";
import { RNSwitchStyle } from "./RNSwitchStyle";
import PropTypes from "prop-types";
import Animated, { spring, interpolateColors } from "react-native-reanimated";
import { useThemeColors } from "Hooks/useThemeColors";
import { WIDTH_RATIO } from "../../Themes/Metrics";

function RNSwitch(props) {
  const { styles, value, onValueChange } = props;
  const [switchTranslate] = useState(new Animated.Value(0));
  const Colors = useThemeColors();

  useEffect(() => {
    if (value) {
      spring(switchTranslate, {
        toValue: 14,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    } else {
      spring(switchTranslate, {
        toValue: 0,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    }
  }, [value, switchTranslate]);

  const interpolateTrackStyle = {
    backgroundColor: interpolateColors(switchTranslate, {
      inputRange: [0, 14],
      outputColorRange: [Colors.switchInactive, Colors.switchActive],
    }),
    borderColor: interpolateColors(switchTranslate, {
      inputRange: [0, 14],
      outputColorRange: [Colors.background, Colors.primaryButton],
    }),
    shadowColor: interpolateColors(switchTranslate, {
      inputRange: [0, 14],
      outputColorRange: ["rgba(132, 30, 22, 0.16)", "transparent"],
    }),
    borderWidth: 2 * WIDTH_RATIO,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 2,
  };
  const interpolateThumbStyle = {
    backgroundColor: interpolateColors(switchTranslate, {
      inputRange: [0, 14],
      outputColorRange: [Colors.primaryButton, Colors.white],
    }),
    borderColor: interpolateColors(switchTranslate, {
      inputRange: [0, 14],
      outputColorRange: [Colors.buttonBackground, Colors.primaryButton],
    }),
  };
  const memoizedOnSwitchPressCallback = React.useCallback(() => {
    onValueChange(!value);
  }, [onValueChange, value]);

  return (
    <Pressable onPress={memoizedOnSwitchPressCallback}>
      <Animated.View style={[styles.track, interpolateTrackStyle]}>
        <Animated.View
          style={[
            styles.thumb,
            interpolateThumbStyle,
            {
              transform: [
                {
                  translateX: switchTranslate,
                },
              ],
            },
          ]}
        />
      </Animated.View>
    </Pressable>
  );
}

RNSwitch.propTypes = {
  onPress: PropTypes.func.isRequired,
};

RNSwitch.defaultProps = {
  onPress: () => {},
};

export default compose(RNSwitchStyle)(RNSwitch);
