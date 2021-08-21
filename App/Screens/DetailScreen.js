import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import BaseContainer from '../Components/BaseContainer';
import {colors} from '../Config/colors';
import {constants} from '../Config/constants';
import CapitalizeFirstLetter from '../Helpers/CapitalizeFirstLetter';
import FormatDate from '../Helpers/FormatDate';

const {width, height} = Dimensions.get('screen');

export default function DetailScreen({navigation, route}) {
  const {detailTransaction: detail} = route.params;
  const senderBank = CapitalizeFirstLetter(detail.sender_bank);
  const benefBank = CapitalizeFirstLetter(detail.beneficiary_bank);

  const copyToClipboard = () => {
    Clipboard.setString(`#${detail.id}`);
    triggerToast();
  };

  const posY = useRef(new Animated.Value(-100)).current;

  const triggerToast = () => {
    Animated.sequence([
      Animated.timing(posY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(posY, {
        toValue: -100,
        duration: 250,
        delay: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <BaseContainer>
      <Animated.View
        style={[styles.animatedToast, {transform: [{translateY: posY}]}]}>
        <Text style={styles.toastText}>#{detail.id} telah disalin !</Text>
      </Animated.View>
      {/* ada toast alert ketika user menekan copy */}
      <TouchableOpacity style={styles.detailTitleRow} onPress={copyToClipboard}>
        <Text style={styles.detailText('bold')}>
          ID TRANSAKSI: #{detail.id}
        </Text>
        <MaterialIcon
          name="content-copy"
          color={colors.secondary}
          size={constants.icon.medium}
        />
      </TouchableOpacity>

      <View
        style={[
          styles.detailTitleRow,
          {justifyContent: 'space-between', flexDirection: 'row'},
        ]}>
        <Text style={styles.detailText('bold')}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Text style={[styles.detailText, {color: colors.secondary}]}>
            Tutup
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailDesc}>
        <Text style={styles.bankTitle}>
          {senderBank} ➔ {benefBank}
        </Text>
        <View style={styles.spacer} />
        <View style={{flexDirection: 'row'}}>
          <View style={styles.detailCol('flex-start')}>
            <Text style={styles.detailText('bold')}>
              - {detail.beneficiary_name.toUpperCase()}
            </Text>
            <Text style={styles.detailText('normal')}>
              {detail.account_number}
            </Text>
            <View style={styles.spacer} />
            <Text style={styles.detailText('bold')}>BERITA TRANSFER</Text>
            <Text style={styles.detailText('normal')}>{detail.remark}</Text>
            <View style={styles.spacer} />
            <Text style={styles.detailText('bold')}>Waktu Dibuat</Text>
            <Text style={styles.detailText('normal')}>
              {FormatDate(detail.created_at)}
            </Text>
          </View>
          <View style={styles.detailCol('center')}>
            <Text style={styles.detailText('bold')}>NOMINAL</Text>
            <Text style={styles.detailText('normal')}>{detail.amount}</Text>
            <View style={styles.spacer} />
            <Text style={styles.detailText('bold')}>KODE UNIK</Text>
            <Text style={styles.detailText('normal')}>
              {detail.unique_code}
            </Text>
          </View>
        </View>
      </View>
    </BaseContainer>
  );
}

const styles = StyleSheet.create({
  animatedToast: {
    backgroundColor: colors.primary,
    width: width,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    height: height * 0.065,
    justifyContent: 'center',
    width: width * 0.2,
    alignItems: 'flex-end',
  },
  bankTitle: {
    fontSize: constants.fontSize.xl,
    fontWeight: 'bold',
  },
  detailCol: align => ({
    width: '50%',
    alignItems: align,
  }),
  detailDesc: {
    justifyContent: 'flex-start',
    width: width * 0.95,
    paddingHorizontal: constants.layout.detailPadding,
    backgroundColor: colors.light,
    paddingVertical: height * 0.025,
    marginTop: constants.layout.margin / 2,
  },
  detailTitleRow: {
    flexDirection: 'row',
    width: width * 0.95,
    backgroundColor: colors.light,
    paddingHorizontal: constants.layout.detailPadding,
    height: height * 0.075,
    marginTop: constants.layout.margin / 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  detailText: weight => ({
    fontSize: constants.fontSize.m,
    fontWeight: weight,
  }),
  spacer: {
    marginVertical: constants.layout.margin,
  },
  toastText: {
    fontWeight: 'bold',
    color: colors.light,
    fontSize: constants.fontSize.xl,
  },
});
