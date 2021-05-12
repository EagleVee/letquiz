import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { ProfileScreenStyle } from "./ProfileScreenStyle";
import Container from "Components/Container/Container";
import { useThemeColors } from "Hooks/useThemeColors";
import ProfileScreenHeader from "./ProfileScreenHeader/ProfileScreenHeader";
import { useDispatch, useSelector } from "react-redux";
import ProfileRouteBar from "./ProfileRouteBar/ProfileRouteBar";
import I18n from "../../Locales";
import { DARK_THEME, LIGHT_THEME } from "../../Config/Themes";
import { useThemeSvgs } from "Hooks/useThemeSvgs";
import DeviceActions from "../../Redux/Actions/DeviceActions";
import BlockDivider from "Components/Dividers/BlockDivider";
import { WIDTH_RATIO } from "../../Themes/Metrics";
import { RNScrollView } from "Components/RNComponents";
import AppLogoWithVersion from "Components/AppLogoWithVersion/AppLogoWithVersion";
import { WithAuth } from "../../Business/WithAuth";
import { useModal } from "../../Hooks/useModal";
import LinkingService from "../../Services/LinkingService";

function ProfileScreen(props) {
  const { styles, logout } = props;
  const NavigationMethods = useNavigationMethods();
  const Colors = useThemeColors();
  const Svgs = useThemeSvgs();
  const Modal = useModal();
  const dispatch = useDispatch();
  const { customer, auth, device } = useSelector(state => state);
  const { theme, language } = device;
  const { isAuthenticated } = auth;

  function onBarPress(route, params = {}) {
    try {
      NavigationMethods.goToScreen(route, params);
    } catch (e) {
      console.log(e);
    }
  }

  function onChangeTheme(value) {
    const theme = value === true ? DARK_THEME : LIGHT_THEME;
    dispatch(DeviceActions.changeTheme(theme));
  }

  function onLogoutPress() {
    Modal.showOptionModal({
      content: I18n.t("ProfileScreen.LogOutConfirm"),
      okCallback: logout,
    });
  }

  function onSupportPress() {
    LinkingService.openURL("https://help.quizlet.com/hc/en-us");
  }

  return (
    <Container statusBarColor={Colors.cardBackground}>
      <RNScrollView>
        <ProfileScreenHeader
          customer={customer}
          isAuthenticated={isAuthenticated}
        />
        <View style={styles.profileMain}>
          <BlockDivider height={12 * WIDTH_RATIO} />
          <ProfileRouteBar
            onPress={onSupportPress}
            title={I18n.t("ProfileScreen.SuggestionsAndSupport")}
            Icon={Svgs.Profile.ChatBubble}
            iconFill={theme === LIGHT_THEME ? "black" : null}
          />
          <BlockDivider height={12 * WIDTH_RATIO} />
          <ProfileRouteBar
            type="route"
            onPress={onBarPress.bind(this, "AboutScreen")}
            title={I18n.t("ProfileScreen.AboutTrainery")}
            Icon={Svgs.Profile.About}
            iconFill={theme === LIGHT_THEME ? "black" : null}
          />
          <BlockDivider height={12 * WIDTH_RATIO} />
          <ProfileRouteBar
            type="route"
            onPress={onBarPress.bind(this, "FAQScreen")}
            title={I18n.t("ProfileScreen.FAQ")}
            Icon={Svgs.Profile.FAQ}
            iconFill={theme === LIGHT_THEME ? "black" : null}
          />
          <BlockDivider height={12 * WIDTH_RATIO} />
          <ProfileRouteBar
            type="switch"
            title={I18n.t("ProfileScreen.DarkMode")}
            Icon={Svgs.Profile.UI}
            iconFill={theme === LIGHT_THEME ? "black" : null}
            switchValue={theme === DARK_THEME}
            onSwitchChange={onChangeTheme}
          />
          <BlockDivider height={12 * WIDTH_RATIO} />
          <ProfileRouteBar
            isVisible={isAuthenticated}
            type="none"
            title={I18n.t("ProfileScreen.LogOut")}
            Icon={Svgs.Profile.LogOut}
            iconFill={Colors.error}
            titleColor={Colors.error}
            onPress={onLogoutPress}
          />
          <BlockDivider height={40 * WIDTH_RATIO} />
        </View>
      </RNScrollView>
    </Container>
  );
}

export default compose(
  ProfileScreenStyle,
  WithAuth,
)(ProfileScreen);
