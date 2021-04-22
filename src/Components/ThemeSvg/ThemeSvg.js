import React, { useMemo } from "react";
import { View } from "react-native";
import { compose } from "ramda";
import { ThemeSvgStyle } from "./ThemeSvgStyle";
import PropTypes from "prop-types";
import { DARK_THEME, LIGHT_THEME } from "../../Config/Themes";
import { useSelector } from "react-redux";

function ThemeSvg(props) {
  const { styles, svg, ...otherProps } = props;
  const theme = useSelector(state => state.device.theme);
  const SvgComponent = svg[theme];
  return useMemo(() => {
    return SvgComponent ? <SvgComponent {...otherProps} /> : <View />;
  }, [SvgComponent]);
}

ThemeSvg.propTypes = {
  svg: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

ThemeSvg.defaultProps = {
  svg: { [DARK_THEME]: null, [LIGHT_THEME]: null },
};

export default compose(ThemeSvgStyle)(ThemeSvg);
