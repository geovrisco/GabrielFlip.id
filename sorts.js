let data = [
  {
    account_number: '3929924506',
    amount: 1796478,
    beneficiary_bank: 'bsm',
    beneficiary_name: 'Beck Glover',
    completed_at: '2021-08-21 15:57:09',
    created_at: '2021-08-14 05:57:09',
    fee: 0,
    id: 'FT23271',
    remark: 'sample remark',
    sender_bank: 'bni',
    status: 'SUCCESS',
    unique_code: 650,
  },
  {
    account_number: '638045158',
    amount: 2956432,
    beneficiary_bank: 'bri',
    beneficiary_name: 'Hal Matthams',
    completed_at: '2021-08-21 12:57:09',
    created_at: '2021-08-19 10:57:09',
    fee: 0,
    id: 'FT53523',
    remark: 'sample remark',
    sender_bank: 'bni',
    status: 'SUCCESS',
    unique_code: 78,
  },
  {
    account_number: '6418035544',
    amount: 2843682,
    beneficiary_bank: 'bsm',
    beneficiary_name: 'Hal Matthams',
    completed_at: '2021-08-21 15:57:09',
    created_at: '2021-08-18 09:57:09',
    fee: 0,
    id: 'FT12150',
    remark: 'sample remark',
    sender_bank: 'bni',
    status: 'SUCCESS',
    unique_code: 792,
  },
  {
    account_number: '4690112598',
    amount: 4237222,
    beneficiary_bank: 'btpn',
    beneficiary_name: 'Hal Matthams',
    completed_at: '2021-08-21 14:57:09',
    created_at: '2021-08-16 07:57:09',
    fee: 0,
    id: 'FT12222',
    remark: 'sample remark',
    sender_bank: 'bni',
    status: 'SUCCESS',
    unique_code: 101,
  },
  {
    account_number: '8501375801',
    amount: 887750,
    beneficiary_bank: 'mandiri',
    beneficiary_name: 'Jake Castillo',
    completed_at: '2021-08-21 14:57:09',
    created_at: '2021-08-21 14:57:09',
    fee: 0,
    id: 'FT73077',
    remark: 'sample remark',
    sender_bank: 'bni',
    status: 'SUCCESS',
    unique_code: 424,
  },
  {
    account_number: '6253970475',
    amount: 88554,
    beneficiary_bank: 'bsm',
    beneficiary_name: 'Jethro Cox',
    completed_at: '2021-08-21 14:57:09',
    created_at: '2021-08-17 08:57:09',
    fee: 0,
    id: 'FT20262',
    remark: 'sample remark',
    sender_bank: 'bni',
    status: 'SUCCESS',
    unique_code: 756,
  },
  {
    account_number: '3090592528',
    amount: 2400688,
    beneficiary_bank: 'bsm',
    beneficiary_name: 'Jethro Cox',
    completed_at: '2021-08-21 14:57:09',
    created_at: '2021-08-15 06:57:09',
    fee: 0,
    id: 'FT96665',
    remark: 'sample remark',
    sender_bank: 'bni',
    status: 'PENDING',
    unique_code: 675,
  },
  {
    account_number: '2778398539',
    amount: 2721120,
    beneficiary_bank: 'btpn',
    beneficiary_name: 'Rhiannan Simmons',
    completed_at: '2021-08-21 14:57:09',
    created_at: '2021-08-20 11:57:09',
    fee: 0,
    id: 'FT85347',
    remark: 'sample remark',
    sender_bank: 'bni',
    status: 'SUCCESS',
    unique_code: 375,
  },
  {
    account_number: '1280379009',
    amount: 3690725,
    beneficiary_bank: 'mandiri',
    beneficiary_name: 'Sufyan Kramer',
    completed_at: '2021-08-21 14:57:09',
    created_at: '2021-08-21 14:56:09',
    fee: 0,
    id: 'FT71932',
    remark: 'sample remark',
    sender_bank: 'bni',
    status: 'SUCCESS',
    unique_code: 738,
  },
  {
    account_number: '9355708748',
    amount: 2000399,
    beneficiary_bank: 'bca',
    beneficiary_name: 'Sufyan Kramer',
    completed_at: '2021-08-21 14:57:09',
    created_at: '2021-08-21 14:55:09',
    fee: 0,
    id: 'FT60061',
    remark: 'sample remark',
    sender_bank: 'bni',
    status: 'SUCCESS',
    unique_code: 886,
  },
];

const DescendingSort = (data, key, isDate = false) => {
  data = data.sort((a, b) => {
    let left = !isDate ? a[key] : new Date(a[key]);
    let right = !isDate ? b[key] : new Date(b[key]);

    if (isDate) {
      return right - left;
    } else {
      if (left > right) {
        return -1;
      }
      if (left < right) {
        return 1;
      }
      return 0;
    }
  });

  return data;
};

const AscendingSort = (data, key, isDate = false) => {
  data = data.sort((a, b) => {
    let left = !isDate ? a[key] : new Date(a[key]);
    let right = !isDate ? b[key] : new Date(b[key]);
    if (isDate) {
      return left - right;
    } else {
      if (left < right) {
        return -1;
      }
      if (left > right) {
        return 1;
      }
      return 0;
    }
  });

  return data;
};

console.log(AscendingSort(data, 'completed_at', true));
