import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {colors} from '../Config/colors';
import {constants} from '../Config/constants';
export default function BaseContainer({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.shade,
    paddingTop: constants.layout.margin,
  },
});
