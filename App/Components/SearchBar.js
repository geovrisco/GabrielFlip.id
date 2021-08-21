import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';

import {colors} from '../Config/colors';
import {constants} from '../Config/constants';

const {width, height} = Dimensions.get('screen');

export default function SearchBar({
  placeHolder = 'Cari nama, bank, atau nominal',
  onChangeText = () => {},
  onPress = () => {},
  value = '',
  buttonTitle = 'URUTKAN',
}) {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchBarInput}>
        <SimpleLine
          name="magnifier"
          size={constants.icon.medium}
          color={colors.shade100}
        />
        <TextInput
          placeholderTextColor={colors.shade100}
          placeholder={placeHolder}
          style={styles.searchbarTextInput}
          spellCheck={false}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity onPress={onPress} style={styles.searchbarSortButton}>
        <View style={styles.searchBarSort}>
          <Text style={styles.searchBarSortText}>{buttonTitle}</Text>
          <Material
            name="chevron-down"
            size={constants.icon.big}
            color={colors.secondary}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.95,
    backgroundColor: colors.light,
    justifyContent: 'space-between',
    paddingHorizontal: constants.layout.padding,
  },
  searchBarInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    maxWidth: width * 0.6,
    borderRadius: 10,
  },
  searchBarSort: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchbarSortButton: {
    height: height * 0.05,
    justifyContent: 'center',
  },
  searchBarSortText: {
    fontSize: constants.fontSize.s,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  searchbarTextInput: {
    width: width * 0.5,
    fontSize: constants.fontSize.s,
    paddingLeft: constants.layout.padding,
  },
});
