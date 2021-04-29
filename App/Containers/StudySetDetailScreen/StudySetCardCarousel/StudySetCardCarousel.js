import React, { useMemo, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { StudySetCardCarouselStyle } from "./StudySetCardCarouselStyle";
import PropTypes from "prop-types";
import { RNFlatList, RNScrollView } from "../../../Components/RNComponents";
import { deviceWidth, WIDTH_RATIO } from "../../../Themes/Metrics";
import FlipCardItem from "../FlipCardItem/FlipCardItem";

function StudySetCardCarousel(props) {
  const { styles, cards } = props;
  const [cardIndex, setCardIndex] = useState(0);

  const paginationList = useMemo(() => {
    const result = [];
    for (let i = 0; i < cards.length; i++) {
      result.push(i);
    }

    return result;
  }, [cards]);

  function renderCardItem({ item, index }) {
    return <FlipCardItem card={item} />;
  }

  function onMomentumScrollEnd({ nativeEvent }) {
    const { contentOffset } = nativeEvent;
    const index = Math.floor((contentOffset.x + 1) / deviceWidth);
    setCardIndex(index);
  }

  function renderPaginationItem({ item, index }) {
    return (
      <View
        style={
          item === cardIndex
            ? styles.paginationActive
            : styles.paginationInactive
        }
      />
    );
  }

  return (
    <View>
      <RNFlatList
        data={cards}
        pagingEnabled={true}
        dividerWidth={32 * WIDTH_RATIO}
        renderItem={renderCardItem}
        horizontal
        contentContainerStyle={styles.listContent}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
      <View style={styles.paginationContainer}>
        <RNFlatList
          data={paginationList}
          renderItem={renderPaginationItem}
          dividerWidth={4 * WIDTH_RATIO}
          dividerHeight={0}
          scrollEnabled={false}
          horizontal
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
}

StudySetCardCarousel.propTypes = {
  onPress: PropTypes.func.isRequired,
};

StudySetCardCarousel.defaultProps = {
  onPress: () => {},
};

export default compose(StudySetCardCarouselStyle)(StudySetCardCarousel);
