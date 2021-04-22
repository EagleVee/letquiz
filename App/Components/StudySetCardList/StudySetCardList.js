import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { StudySetCardListStyle } from "./StudySetCardListStyle";
import PropTypes from "prop-types";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import { RNFlatList } from "../RNComponents";
import BlockDivider from "../Dividers/BlockDivider";

function StudySetCardList(props) {
  const { styles, cards } = props;

  function renderCardItem({ item, index }) {
    const { term, definition } = item;
    return (
      <View style={styles.cardItem}>
        <Text style={styles.h8} numberOfLines={3}>
          {term}
        </Text>
        <BlockDivider height={8 * WIDTH_RATIO} />
        <Text style={styles.h8} numberOfLines={7}>
          {definition}
        </Text>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.h8Bold}>Cards</Text>
      </View>
    );
  }
  return (
    <RNFlatList
      data={cards}
      pagingEnabled={true}
      dividerHeight={12 * WIDTH_RATIO}
      renderItem={renderCardItem}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={styles.listContent}
    />
  );
}

StudySetCardList.propTypes = {
  onPress: PropTypes.func.isRequired,
};

StudySetCardList.defaultProps = {
  onPress: () => {},
};

export default compose(StudySetCardListStyle)(StudySetCardList);
