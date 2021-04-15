import "react-native";
import React from "react";
import App from "../App";
import renderer from "react-test-renderer";

it("App render correctly", () => {
  renderer.create(<App />);
});
