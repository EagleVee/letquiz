import { useMemo } from "react";
import { useSelector } from "react-redux";
import { DARK_THEME } from "../Config/Themes";
import { darkThemeSvgs, lightThemeSvgs } from "../Themes/Svgs";

export const useThemeSvgs = customTheme => {
  const theme = customTheme
    ? customTheme
    : useSelector(state => state.device.theme);
  return useMemo(() => {
    return theme === DARK_THEME ? darkThemeSvgs : lightThemeSvgs;
  }, [theme]);
};
