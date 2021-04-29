import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { StatusBar, View, Platform } from "react-native";
import { STATUS_BAR_HEIGHT } from "Themes/Metrics";

function Statusbar(
  {
    backgroundColor = "transparent",
    content = "light-content",
    translucent = true,
    height = STATUS_BAR_HEIGHT,
  },
  ref,
) {
  const bg = Platform.OS === "android" ? backgroundColor : backgroundColor;
  const iOsBackgroundColor = Platform.OS === "android" ? "transparent" : bg;
  const [statusBarHeight, setStatusBarHeight] = useState(height);

  useEffect(() => {
    StatusBar.setBarStyle(content);
  }, [content]);

  function setHidden(hidden) {
    StatusBar.setHidden(hidden);
    if (hidden) {
      setStatusBarHeight(0);
    } else {
      setStatusBarHeight(height);
    }
  }

  useImperativeHandle(ref, () => ({
    setHidden,
  }));

  return (
    <View
      style={{
        height: statusBarHeight,
        backgroundColor: iOsBackgroundColor,
      }}>
      <StatusBar backgroundColor={bg} translucent={translucent} />
    </View>
  );
}

export default forwardRef(Statusbar);
