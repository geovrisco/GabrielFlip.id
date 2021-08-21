import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../Config/colors';
import {constants} from '../../Config/constants';
import CapitalizeFirstLetter from '../../Helpers/CapitalizeFirstLetter';
import CurrencyFormat from '../../Helpers/CurrencyFormat';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import FormatDate from '../../Helpers/FormatDate';

const {width, height} = Dimensions.get('screen');

export default function TransactionHistoryCard({item}) {
  let senderBank = CapitalizeFirstLetter(item.sender_bank);
  let beneficiaryBank = CapitalizeFirstLetter(item.beneficiary_bank);

  return (
    <View
      style={styles.flatlistItemContainer(
        item.status !== 'SUCCESS' ? colors.secondary : colors.primary,
      )}>
      <View style={styles.flatlistItem}>
        <View>
          <Text style={styles.senderBenefText}>
            {senderBank} ➔ {beneficiaryBank}
          </Text>
          <Text style={styles.benefName}>
            {item.beneficiary_name.toUpperCase()}
          </Text>
          <View style={styles.flatlistBottomRow}>
            <Text style={styles.benefName}>{CurrencyFormat(item.amount)} </Text>
            <Material name="circle" size={constants.icon.small} />
            <Text style={styles.benefName}>
              {' '}
              {FormatDate(item.completed_at)}
            </Text>
          </View>
        </View>
        {item.status === 'SUCCESS' ? (
          <View style={styles.statusSuccess}>
            <Text style={styles.successText}>Berhasil</Text>
          </View>
        ) : (
          <View style={styles.statusProcess}>
            <Text style={styles.processText}>Pengecekan</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlistBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  benefName: {
    fontSize: constants.fontSize.s,
    lineHeight: constants.fontSize.s + 5,
  },
  flatlistItem: {
    width: width * 0.93,
    backgroundColor: '#fff',
    paddingHorizontal: constants.layout.padding,
    paddingVertical: constants.layout.padding,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    left: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatlistItemContainer: color => ({
    marginVertical: constants.layout.margin / 2,
    flexDirection: 'row',
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    width: width * 0.95,
    justifyContent: 'flex-end',
    backgroundColor: color,
  }),
  senderBenefText: {
    fontWeight: 'bold',
    fontSize: constants.fontSize.m,
  },
  statusSuccess: {
    paddingHorizontal: constants.layout.padding,
    paddingVertical: constants.layout.padding,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  statusProcess: {
    paddingHorizontal: constants.layout.padding,
    paddingVertical: constants.layout.padding,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  successText: {
    fontSize: constants.fontSize.s,
    color: colors.light,
    fontWeight: 'bold',
  },
  processText: {
    fontSize: constants.fontSize.s,
    color: colors.dark,
    fontWeight: 'bold',
  },
});
