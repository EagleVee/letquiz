import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { compose } from "ramda";
import { ProfileScreenHeaderStyle } from "./ProfileScreenHeaderStyle";
import PropTypes from "prop-types";
import FastImage from "Components/RNComponents/FastImage";
import { useThemeSvgs } from "Hooks/useThemeSvgs";
import AppLogoWithVersion from "Components/AppLogoWithVersion/AppLogoWithVersion";

function ProfileScreenHeader(props) {
  const { styles, customer, isAuthenticated } = props;
  const Svgs = useThemeSvgs();
  const NavigationMethods = useNavigationMethods();
  const { avatarSource, username, email } = customer;

  function onLoginSuccess() {
    NavigationMethods.resetStackToTab();
  }

  function renderUnauthenticated() {
    return (
      <View style={styles.unauthenticatedContainer}>
        <AppLogoWithVersion />
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
          <Text style={styles.h6Bold}>{username}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isAuthenticated ? renderAuthenticated() : renderUnauthenticated()}
    </View>
  );
}

ProfileScreenHeader.propTypes = {
  navigation: PropTypes.any,
};

ProfileScreenHeader.defaultProps = {};

export default compose(ProfileScreenHeaderStyle)(ProfileScreenHeader);
