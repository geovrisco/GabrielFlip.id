import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../Config/colors';
import {constants} from '../Config/constants';
export default function RadioButton({
  active = false,
  text = 'default',
  onPress = () => {},
}) {
  return (
    <View style={styles.container}>
      <View style={styles.radioButton}>
        {active && <View style={styles.active} />}
      </View>
      <Text style={{marginLeft: 10, fontSize: constants.fontSize.l}}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '85%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  radioButton: {
    width: 22,
    height: 22,
    borderColor: colors.secondary,
    borderRadius: 11,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    width: 10,
    height: 10,
    backgroundColor: colors.secondary,
    borderRadius: 10 / 2,
  },
});
