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

function SearchScreen(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const [searchValue, setSearchValue] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const searchInputRef = useRef();

  const debouncedSearch = lodash.debounce(() => {}, 300);

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

  function renderSearchItem({ item, index }) {
    return <View />;
  }

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
        data={[]}
        renderItem={renderSearchItem}
        ListEmptyComponent={renderListEmpty}
      />
    </Container>
  );
}

export default compose(SearchScreenStyle)(SearchScreen);
