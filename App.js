import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  LogBox,
} from 'react-native';
import {colors} from './App/Config/colors';
import {RootNavigator} from './App/Routes/RootNavigator';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <>
      <StatusBar backgroundColor={colors.light} barStyle="dark-content" />
      <RootNavigator />
    </>
  );
};

export default App;
