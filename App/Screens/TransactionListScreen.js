import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';

import BaseContainer from '../Components/BaseContainer';
import RadioButton from '../Components/RadioButton';
import SearchBar from '../Components/SearchBar';
import TransactionHistoryCard from '../Components/Cards/TransactionHistoryCard';
import {colors} from '../Config/colors';
import formatHistory from '../Helpers/FormatTransactionHistory';
import {AscendingSort, DescendingSort} from '../Helpers/sort';
import {routes} from '../Config/route';
import {constants} from '../Config/constants';

const {width, height} = Dimensions.get('screen');

export default function TransactionListScreen({navigation, route}) {
  const [transactionData, setTransactionData] = useState([]);
  const [filteredTransactionData, setFilteredTransactionData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sortText, setSortText] = useState('URUTKAN');

  const modalItem = [
    {
      name: 'URUTKAN',
      onPress: () =>
        setFilteredTransactionData(
          AscendingSort(filteredTransactionData, 'created_at', true),
        ),
    },
    {
      name: 'Nama A-Z',
      onPress: () =>
        setFilteredTransactionData(
          AscendingSort(filteredTransactionData, 'beneficiary_name'),
        ),
    },
    {
      name: 'Nama Z-A',
      onPress: () =>
        setFilteredTransactionData(
          DescendingSort(filteredTransactionData, 'beneficiary_name'),
        ),
    },
    {
      name: 'Tanggal Terbaru',
      onPress: () =>
        setFilteredTransactionData(
          DescendingSort(filteredTransactionData, 'completed_at', true),
        ),
    },
    {
      name: 'Tanggal Terlama',
      onPress: () =>
        setFilteredTransactionData(
          DescendingSort(filteredTransactionData, 'completed_at', true),
        ),
    },
  ];

  const fetchHistoryData = async () => {
    try {
      let response = await fetch('https://nextar.flip.id/frontend-test', {
        method: 'GET',
      });
      let data = await response.json();
      if (data == {} || !data) throw {code: 400, message: 'data not found'};
      setTransactionData(formatHistory(data));
      setFilteredTransactionData(formatHistory(data));
    } catch (error) {
      console.log(error);
      setTransactionData([]);
    }
  };

  useEffect(() => {
    let filtered = [];
    if (!searchData) return setFilteredTransactionData(transactionData);
    let search = searchData.toLowerCase();
    filtered = transactionData.filter(
      ({beneficiary_bank, beneficiary_name, sender_bank, amount}) => {
        return (
          beneficiary_bank.toLowerCase().includes(search) ||
          beneficiary_name.toLowerCase().includes(search) ||
          sender_bank.toLowerCase().includes(search) ||
          amount.toString().includes(searchData)
        );
      },
    );
    setFilteredTransactionData(filtered);
  }, [searchData]);

  const renderTransactionHistory = ({item}) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate(routes.DetailScreen, {detailTransaction: item})
        }>
        <TransactionHistoryCard item={item} />
      </Pressable>
    );
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);

  return (
    <BaseContainer>
      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            {modalItem.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{width: '90%'}}
                onPress={() => {
                  setActiveIndex(index),
                    setShowModal(false),
                    item.onPress(),
                    setSortText(item.name);
                }}>
                <RadioButton
                  text={item.name}
                  active={activeIndex == index ? true : false}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
      <SearchBar
        value={searchData}
        onChangeText={text => setSearchData(text)}
        onPress={() => setShowModal(true)}
        buttonTitle={sortText}
      />

      <FlatList
        bounces={false}
        data={filteredTransactionData}
        keyExtractor={item => item.id}
        renderItem={renderTransactionHistory}
      />
    </BaseContainer>
  );
}

const styles = StyleSheet.create({
  modalBody: {
    backgroundColor: colors.light,
    width: width * 0.8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: height * 0.15,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ' rgba(0,0,0,0.5)',
    width: width,
    height: height,
  },
});
