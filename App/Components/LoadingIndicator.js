import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {colors} from '../Config/colors';
import {constants} from '../Config/constants';

export default function LoadingIndicator() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={colors.secondary} />
      <Text style={styles.loadingText}>Loading Data...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {flex: 1, justifyContent: 'center', alignContent: 'center'},
  loadingText: {
    fontSize: constants.fontSize.xl,
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
