module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],

        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@assets": "./assets",
          "@utils": "./utils",
          "@Types": "./types",
          "@components": "./components",
        }
      }
    ]
  ]
};
