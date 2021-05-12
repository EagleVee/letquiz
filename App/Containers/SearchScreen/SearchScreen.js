import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { SearchScreenStyle } from "./SearchScreenStyle";
import Container from "Components/Container/Container";
import { RNFlatList, RNScrollView } from "Components/RNComponents";
import Ionicons from "react-native-vector-icons/Ionicons";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import { useThemeColors } from "../../Hooks/useThemeColors";
import lodash from "lodash";
import BlockDivider from "../../Components/Dividers/BlockDivider";
import SimpleTabBar from "../../Components/TabBars/SimpleTabBar";
import { WithStudySetFetch } from "../../Business/WithStudySetFetch";
import StudySetItem from "../../Components/StudySetItem/StudySetItem";

function SearchScreen(props) {
  const { styles, getStudySets, studySet } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const searchInputRef = useRef();

  function onSearchSuccess(response) {
    if (tabIndex === 0) {
      setSearchResult(studySet.studySets);
    }
  }

  const debouncedSearch = lodash.debounce(text => {
    if (tabIndex === 0) {
      const params = {
        search: text,
        paginate: 10,
        page: 1,
      };
      getStudySets(params, onSearchSuccess);
    }
  }, 300);

  function onSearchTextChange(text) {
    setSearchValue(text);
    debouncedSearch(text);
  }

  function onSearchBarPress() {
    searchInputRef.current.focus();
  }

  function onTabChange(index) {
    setTabIndex(index);
  }

  function onStudySetPress(item) {
    NavigationMethods.goToScreen("StudySetDetailScreen", {
      studySet: item,
    });
  }

  function renderSearchItem({ item, index }) {
    if (tabIndex === 0) {
      return (
        <StudySetItem studySet={item} index={index} onPress={onStudySetPress} />
      );
    }

    return <View />;
  }

  useEffect(() => {
    setSearchResult([]);
  }, [tabIndex]);

  function renderListEmpty() {
    return searchValue.length > 0 ? (
      <View style={styles.listEmpty}>
        <Text style={styles.h8}>
          There's no result that matches your interest.
        </Text>
      </View>
    ) : (
      <View style={styles.listEmpty}>
        <Text style={styles.h8}>Input a study topic or keyword</Text>
        <Text style={styles.h8}>
          Tips: The more specific the better it gets!
        </Text>
      </View>
    );
  }

  return (
    <Container
      statusBarColor={Colors.primary}
      statusBarContent={"light-content"}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.searchBarContainer}
          onPress={onSearchBarPress}>
          <Ionicons
            name={"search"}
            size={20 * WIDTH_RATIO}
            color={Colors.primaryTitle}
          />
          <TextInput
            ref={searchInputRef}
            value={searchValue}
            onChangeText={onSearchTextChange}
            style={styles.searchInput}
            placeholder={"Search"}
            placeholderTextColor={Colors.tabIconInactive}
          />
        </TouchableOpacity>
        <BlockDivider height={12 * WIDTH_RATIO} />
        <SimpleTabBar
          tabLabels={["STUDY SETS", "CLASSES", "USERS"]}
          index={tabIndex}
          onTabChange={onTabChange}
          containerStyle={styles.tabBar}
          labelStyle={styles.tabLabel}
          labelActiveStyle={styles.tabActiveLabel}
          indicatorStyle={styles.tabIndicator}
        />
      </View>
      <RNFlatList
        data={searchResult}
        contentContainerStyle={styles.listContent}
        renderItem={renderSearchItem}
        dividerHeight={12 * WIDTH_RATIO}
        ListEmptyComponent={renderListEmpty}
      />
    </Container>
  );
}

export default compose(
  SearchScreenStyle,
  WithStudySetFetch,
)(SearchScreen);
