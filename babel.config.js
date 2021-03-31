module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          Assets: "./App/Assets",
          Images: "./App/Assets/Images",
          Business: "./App/Business",
          Common: "./App/Common",
          Components: "./App/Components",
          Config: "./App/Config",
          Containers: "./App/Containers",
          Fixtures: "./App/Fixtures",
          Hooks: "./App/Hooks",
          Locales: "./App/Locales",
          Models: "./App/Models",
          Navigation: "./App/Navigation",
          Redux: "./App/Redux",
          Actions: "./App/Redux/Actions",
          Reducers: "./App/Redux/Reducers",
          Providers: "./App/Providers",
          Sagas: "./App/Sagas",
          Services: "./App/Services",
          Styles: "./App/Styles",
          Themes: "./App/Themes",
          Transforms: "./App/Transforms",
          Utils: "./App/Utils",
        },
      },
    ],
  ],
};