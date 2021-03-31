import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { compose } from "ramda";
import { ProfileScreenHeaderStyle } from "./ProfileScreenHeaderStyle";
import PropTypes from "prop-types";
import FastImage from "Components/RNComponents/FastImage";
import { WIDTH_RATIO } from "Themes/Metrics";
import { useThemeSvgs } from "Hooks/useThemeSvgs";
import AppLogoWithVersion from "Components/AppLogoWithVersion/AppLogoWithVersion";
import SubscriptionCodeInput from "../../../Components/SubscriptionCodeInput/SubscriptionCodeInput";

function ProfileScreenHeader(props) {
  const { styles, customer, isAuthenticated } = props;
  const Svgs = useThemeSvgs();
  const NavigationMethods = useNavigationMethods();
  const { avatarSource, fullname, email } = customer;

  function onLoginSuccess() {
    NavigationMethods.resetStackToTab();
  }

  function renderUnauthenticated() {
    return (
      <View style={styles.unauthenticatedContainer}>
        <AppLogoWithVersion />
        {/*<View style={styles.socialButtonContainer}>*/}
        {/*</View>*/}
      </View>
    );
  }

  function renderAuthenticated() {
    return (
      <View style={styles.infoContainer}>
        <FastImage
          source={avatarSource}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.nameContainer}>
          <Text style={styles.h7Bold}>{fullname}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.settingButton}>
          <Svgs.Profile.Setting
            width={20 * WIDTH_RATIO}
            height={20 * WIDTH_RATIO}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isAuthenticated ? renderAuthenticated() : renderUnauthenticated()}
      <View style={styles.codeContainer}>
        <SubscriptionCodeInput />
      </View>
    </View>
  );
}

ProfileScreenHeader.propTypes = {
  navigation: PropTypes.any,
};

ProfileScreenHeader.defaultProps = {};

export default compose(ProfileScreenHeaderStyle)(ProfileScreenHeader);
