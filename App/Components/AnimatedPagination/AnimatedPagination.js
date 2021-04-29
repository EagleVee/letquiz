import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Animated } from "react-native";
import { compose } from "ramda";
import { AnimatedPaginationStyle } from "./AnimatedPaginationStyle";
import PropTypes from "prop-types";
import { RNFlatList } from "../RNComponents";
import { WIDTH_RATIO } from "Themes/Metrics";
import * as Animatable from "react-native-animatable";
import { usePrevious } from "Hooks/usePrevious";

function AnimatedPagination(props) {
  const {
    styles,
    index,
    numToRender,
    getActiveStyle,
    getInactiveStyle,
  } = props;
  const prevProps = usePrevious(props);
  // const animation = new Animated
  const paginationData = useMemo(() => {
    const data = [];
    for (let i = 0; i < numToRender; i++) {
      data.push(i);
    }

    return data;
  }, [numToRender]);

  function getActiveAnimation(index) {
    let animation = null;
    if (
      prevProps &&
      prevProps.index !== null &&
      prevProps.index !== undefined
    ) {
      if (prevProps.index < index) {
        animation = {
          0: {
            width: 46 * WIDTH_RATIO,
            translateX: -20 * WIDTH_RATIO,
          },
          0.5: {
            width: 46 * WIDTH_RATIO,
            translateX: 0,
          },
          1: {
            width: 26 * WIDTH_RATIO,
            translateX: 0,
          },
        };
      } else if (prevProps.index > index) {
        animation = {
          0: {
            width: 46 * WIDTH_RATIO,
            translateX: 20 * WIDTH_RATIO,
          },
          0.5: {
            width: 46 * WIDTH_RATIO,
            translateX: 0,
          },
          1: {
            width: 26 * WIDTH_RATIO,
            translateX: 0,
          },
        };
      }
    }

    return animation;
  }

  function getInactiveAnimation(index) {
    let animation = null;
    if (
      prevProps &&
      prevProps.index !== null &&
      prevProps.index !== undefined
    ) {
      if (prevProps.index === index) {
        animation = {
          0: {
            marginHorizontal: 0,
            width: 0,
          },
          [5 / 9]: {
            marginHorizontal: 0,
            width: 0,
          },
          [7 / 9]: {
            marginHorizontal: 0,
            width: 6 * WIDTH_RATIO,
          },
          1: {
            marginHorizontal: 4 * WIDTH_RATIO,
            width: 12 * WIDTH_RATIO,
          },
        };
      }
    }

    return animation;
  }

  function renderActive(dotIndex) {
    const isFirst = dotIndex === 0;
    const isLast = dotIndex === paginationData.length;
    return (
      <Animatable.View
        style={getActiveStyle(isFirst, isLast)}
        animation={getActiveAnimation(dotIndex)}
        duration={400}
      />
    );
  }

  function renderInactive(dotIndex) {
    const isFirst = dotIndex === 0;
    const isLast = dotIndex === numToRender - 1;
    return (
      <Animatable.View
        style={getInactiveStyle(isFirst, isLast)}
        animation={getInactiveAnimation(dotIndex)}
        direction={
          prevProps && dotIndex === prevProps.index && prevProps.index < index
            ? "normal"
            : "alternate"
        }
        duration={360}
      />
    );
  }

  function renderItem({ item }) {
    return item === index ? renderActive(item) : renderInactive(item);
  }

  useEffect(() => {}, [index]);

  return (
    <RNFlatList
      contentContainerStyle={styles.container}
      data={paginationData}
      renderItem={renderItem}
      dividerWidth={0}
      horizontal
    />
  );
}

AnimatedPagination.propTypes = {
  onPress: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

AnimatedPagination.defaultProps = {
  onPress: () => {},
  index: 0,
};

export default compose(AnimatedPaginationStyle)(AnimatedPagination);
