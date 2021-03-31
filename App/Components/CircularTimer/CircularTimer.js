import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { CircularTimerStyle } from "./CircularTimerStyle";
import PropTypes from "prop-types";
import { RNAnimatedCircularProgress } from "Components/RNComponents";
import TimeService from "Services/TimeService";
import { useInterval } from "Hooks/useInterval";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeColors } from "Hooks/useThemeColors";

function CircularTimer(props) {
  const {
    styles,
    paused,
    size,
    lineSize,
    onFinished,
    renderChildren,
    onTick,
  } = props;
  const Colors = useThemeColors();
  const [timer, setTimer] = useState(0);
  const [maxTime, setMaxTime] = useState(0);

  const fill = maxTime > 0 ? (timer / maxTime) * 100 : 100;
  const timerText = TimeService.formatTimerDuration(timer);

  useEffect(() => {
    setMaxTime(props.maxTime);
    setTimer(props.maxTime);

    if (props.maxTime === 0) {
      onFinished();
    }
  }, [props.maxTime]);

  useInterval(() => {
    if (!paused) {
      const _timer = timer - 1;
      if (_timer >= 0) {
        setTimer(_timer);
        onTick(_timer);
      }

      if (_timer === 0) {
        onFinished();
      }
    }
  }, 1000);

  return (
    <RNAnimatedCircularProgress
      fill={fill}
      tintColor={Colors.primaryRed}
      backgroundColor={Colors.primaryInactiveOpacity}
      width={lineSize}
      size={size}>
      {renderChildren ? (
        renderChildren(timer)
      ) : (
        <Text style={styles.timer}>{timerText}</Text>
      )}
    </RNAnimatedCircularProgress>
  );
}

CircularTimer.propTypes = {
  maxTime: PropTypes.number.isRequired,
  paused: PropTypes.bool,
  size: PropTypes.number,
  lineSize: PropTypes.number,
  textSize: PropTypes.number,
  onFinished: PropTypes.func,
  onTick: PropTypes.func,
  renderChildren: PropTypes.any,
};

CircularTimer.defaultProps = {
  paused: false,
  size: 100 * WIDTH_RATIO,
  lineSize: 10 * WIDTH_RATIO,
  onFinished: () => {},
  onTick: () => {},
};

export default compose(CircularTimerStyle)(CircularTimer);
