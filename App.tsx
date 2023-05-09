/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { COLORS } from '@utils/theme';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from 'screens/HomeScreen';
import store from 'store';

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          hidden
        />
        <HomeScreen  />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
