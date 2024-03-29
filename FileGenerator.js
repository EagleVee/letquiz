const fs = require("fs");

const componentContent = fileName => {
  return `import React, { useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { ${fileName}Style } from "./${fileName}Style";
import PropTypes from "prop-types";

function ${fileName}(props) {
  const { styles } = props;
  return (
    <View style={styles.container}>
      <Text>${fileName}</Text>
    </View>
  );
}

${fileName}.propTypes = {
  onPress: PropTypes.func.isRequired
};

${fileName}.defaultProps = {
  onPress: () => {}
};

export default compose(${fileName}Style)(${fileName})`;
};

const componentReduxContent = fileName => {
  return `import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { compose } from "ramda";
import { ${fileName}Style } from "./${fileName}Style";
import PropTypes from "prop-types";

function ${fileName}(props) {
  const { styles } = props;
  const NavigationMethods = useNavigationMethods();
  return (
    <View style={styles.container}>
      <Text>${fileName}</Text>
    </View>
  );
}

${fileName}.propTypes = {
  navigation: PropTypes.any
};

${fileName}.defaultProps = {};

export default compose(${fileName}Style)(${fileName})`;
};
const styleWrapperContent = fileName => {
  return `import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WIDTH_RATIO } from 'Themes/Metrics';
import { useThemeStyles } from 'Hooks/useThemeStyles';
import { useThemeColors } from 'Hooks/useThemeColors';

export const ${fileName}Style = OriginalComponent => props => {
  const ApplicationStyles = useThemeStyles();
  const Colors = useThemeColors();
  const styles = StyleSheet.create({
    ${fileName.includes("Screen") ? "...ApplicationStyles.screen," : ""}
    ...ApplicationStyles.utils,
    ...ApplicationStyles.text,
  });

  return (
    <OriginalComponent
      {...props}
      styles={styles}
    />
  );
}`;
};

const containerContent = fileName => {
  return `import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { compose } from "ramda";
import { useNavigationMethods } from "Hooks/useNavigationMethods";
import { ${fileName}Style } from "./${fileName}Style";
import Container from "Components/Container/Container";
import { RNScrollView } from "Components/RNComponents";

function ${fileName}(props) {
  const { styles, navigation, route } = props;
  const NavigationMethods = useNavigationMethods();

  return (
    <Container>
      <RNScrollView>
        <Text>${fileName}</Text>
      </RNScrollView>
    </Container>
  );
}

export default compose(${fileName}Style)(${fileName})`;
};

const HOCContent = fileName => {
  return `import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const ${fileName} = (OriginalComponent) => (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  return <OriginalComponent {...props} />;
};`;
};

const actionContent = fileName => {
  return `import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  doSomething: []
});

export const ${fileName}Types = Types;

export default Creators;
`;
};

const reducerContent = fileName => {
  return `import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { ${fileName}Types } from "Redux/Actions/${fileName}Actions";

export const INITIAL_STATE = Immutable({
  something: ""
});

export const doSomething = (state, action) => {
  return state.merge({
    something: "SOMETHING"
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [${fileName}Types.DO_SOMETHING]: doSomething
});`;
};

const sagaContent = fileName => {
  return `import API from "Services/API";
import { call, put } from "redux-saga/effects";
import ${fileName}Actions from "Redux/Actions/${fileName}Actions";

export function* doNothing(action) {}
`;
};
const mapSagaContent = fileName => {
  return `import { takeLatest } from "redux-saga/effects";
import { ${fileName}Types } from "Redux/Actions/${fileName}Actions";
import { doNothing } from "Sagas/${fileName}Sagas";

const map${fileName}Sagas = [
  takeLatest(${fileName}Types.DO_NOTHING, doNothing),
];

export default map${fileName}Sagas;
`;
};

const transformContent = fileName => {
  return `import BaseTransform from "./BaseTransform";
export default class ${fileName} extends BaseTransform {
  fields = {};
  constructor(params = {}) {
    super(params);
    this.appendFields(params);
  }
}`;
};

const createComponent = (fileName, dirType, dirName) => {
  const content = componentContent(fileName);
  const styleContent = styleWrapperContent(fileName);
  let dirPath = `App/Components/${fileName}`;
  if (dirType) {
    if (dirType === "container") {
      dirPath = `App/Containers/${dirName}/${fileName}`;
    } else {
      dirPath = `App/Components/${dirName}`;
    }
  }
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  const filePath = dirPath + `/${fileName}.js`;
  const styleFilePath = dirPath + `/${fileName}Style.js`;
  if (fs.existsSync(filePath) || fs.existsSync(styleFilePath)) {
    throw new Error("File existed!");
  } else {
    writeToOutput(filePath, content);
    writeToOutput(styleFilePath, styleContent);
  }
};

const createComponentRedux = (fileName, dirType, dirName) => {
  const content = componentReduxContent(fileName);
  const styleContent = styleWrapperContent(fileName);
  let dirPath = `App/Components/${fileName}`;
  if (dirType) {
    if (dirType === "container") {
      dirPath = `App/Containers/${dirName}/${fileName}`;
    } else {
      dirPath = `App/Components/${dirName}`;
    }
  }
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  const filePath = dirPath + `/${fileName}.js`;
  const styleFilePath = dirPath + `/${fileName}Style.js`;
  if (fs.existsSync(filePath) || fs.existsSync(styleFilePath)) {
    throw new Error("File existed!");
  } else {
    writeToOutput(filePath, content);
    writeToOutput(styleFilePath, styleContent);
  }
};

const createContainer = fileName => {
  const content = containerContent(fileName);
  const styleContent = styleWrapperContent(fileName);
  const dirPath = `App/Containers/${fileName}`;
  const filePath = `App/Containers/${fileName}/${fileName}.js`;
  const styleFilePath = `App/Containers/${fileName}/${fileName}Style.js`;
  if (fs.existsSync(dirPath)) {
    throw new Error("Directory existed!");
  } else {
    fs.mkdirSync(dirPath);
  }
  if (fs.existsSync(filePath) || fs.existsSync(styleFilePath)) {
    throw new Error("File existed!");
  } else {
    writeToOutput(filePath, content);
    writeToOutput(styleFilePath, styleContent);
  }
};

const createHOC = fileName => {
  const content = HOCContent(fileName);
  const filePath = `App/Business/${fileName}.js`;
  if (fs.existsSync(filePath)) {
    throw new Error("File existed!");
  } else {
    writeToOutput(filePath, content);
  }
};

const createRedux = fileName => {
  const action = actionContent(fileName);
  const reducer = reducerContent(fileName);
  const saga = sagaContent(fileName);
  const mapSaga = mapSagaContent(fileName);

  const actionPath = `App/Redux/Actions/${fileName}Actions.js`;
  const reducerPath = `App/Redux/Reducers/${fileName}Reducer.js`;
  const sagaPath = `App/Sagas/${fileName}Sagas.js`;
  const mapSagaPath = `App/Sagas/MapSagas/map${fileName}Sagas.js`;

  if (
    fs.existsSync(actionPath) ||
    fs.existsSync(reducerPath) ||
    fs.existsSync(sagaPath) ||
    fs.existsSync(mapSagaPath)
  ) {
    throw new Error("File existed!");
  } else {
    writeToOutput(actionPath, action);
    writeToOutput(reducerPath, reducer);
    writeToOutput(sagaPath, saga);
    writeToOutput(mapSagaPath, mapSaga);
  }
};

const createTransform = fileName => {
  const transform = transformContent(fileName);
  const transformPath = `App/Transforms/${fileName}.js`;

  if (fs.existsSync(transformPath)) {
    throw new Error("File existed!");
  } else {
    writeToOutput(transformPath, transform);
  }
};

function writeToOutput(fileOutput, content) {
  const outputWriteStream = fs.createWriteStream(fileOutput);
  outputWriteStream.write(content);
}

const createFile = () => {
  const args = process.argv.slice(2);
  const type = args[0];
  const name = args[1];
  const dirType = args[2];
  const dirName = args[3];
  if (type && name) {
    switch (type) {
      case "component":
        createComponent(name, dirType, dirName);
        break;
      case "component-redux":
        createComponentRedux(name, dirType, dirName);
        break;
      case "container":
        createContainer(name);
        break;
      case "hoc":
        createHOC(name);
        break;
      case "redux":
        // Chỉ tạo bằng tên Redux, ví dụ AuthActions thì chỉ yarn generate redux Auth
        createRedux(name);
        break;
      case "transform":
        createTransform(name);
        break;
    }
  } else {
    throw new Error("Missing type or file name");
  }
};

createFile();
