import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { HomeScreenStyle } from "./HomeScreenStyle";
import Container from "Components/Container/Container";
import { RNFlatList, RNScrollView } from "Components/RNComponents";
import { useThemeColors } from "../../Hooks/useThemeColors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import BlockDivider from "../../Components/Dividers/BlockDivider";
import Feather from "react-native-vector-icons/Feather";
import { studySets } from "../../Fixtures/StudySet";
import StudySetItem from "../../Components/StudySetItem/StudySetItem";
import { useSelector } from "react-redux";

function HomeScreen(props) {
  const { styles, navigation, route, onCreateTabPress } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const { currentStudySets } = useSelector(state => state.studySet);

  function onSearchPress() {
    NavigationMethods.goToScreen("SearchScreen");
  }

  function onStudySetPress(item) {
    NavigationMethods.goToScreen("StudySetDetailScreen", {
      studySet: item,
    });
  }

  function renderStudySetItem({ item, index }) {
    return (
      <StudySetItem studySet={item} index={index} onPress={onStudySetPress} />
    );
  }

  return (
    <Container
      statusBarColor={Colors.primary}
      statusBarContent={"light-content"}>
      <RNScrollView>
        <View style={styles.header}>
          <Text style={[styles.h4Bold, { color: Colors.white }]}>
            Hello Duy!
          </Text>
          <Text style={[styles.h5Bold, { color: Colors.white }]}>
            What do you want to do?
          </Text>
        </View>
        <View style={styles.main}>
          <TouchableOpacity style={styles.card} onPress={onSearchPress}>
            <Ionicons
              name={"search"}
              size={36 * WIDTH_RATIO}
              color={Colors.primaryButton}
            />
            <View style={styles.cardRight}>
              <Text style={styles.h7BoldPrimary}>Find study resources</Text>
              <BlockDivider height={8 * WIDTH_RATIO} />
              <Text style={styles.h8Bold}>
                Save time by finding pre-made study sets for your courses or
                classes
              </Text>
            </View>
          </TouchableOpacity>
          <BlockDivider height={16 * WIDTH_RATIO} />
          <TouchableOpacity style={styles.card} onPress={onCreateTabPress}>
            <Feather
              name={"plus-circle"}
              size={36 * WIDTH_RATIO}
              color={Colors.primaryButton}
            />
            <View style={styles.cardRight}>
              <Text style={styles.h7BoldPrimary}>
                Create your own study set
              </Text>
              <BlockDivider height={8 * WIDTH_RATIO} />
              <Text style={styles.h8Bold}>
                Create a study set that suits your lessons
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <RNFlatList
          data={currentStudySets}
          renderItem={renderStudySetItem}
          dividerHeight={12 * WIDTH_RATIO}
          contentContainerStyle={styles.listContent}
        />
      </RNScrollView>
    </Container>
  );
}

export default compose(HomeScreenStyle)(HomeScreen);
