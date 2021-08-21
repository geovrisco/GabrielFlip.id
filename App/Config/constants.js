import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const MARGIN = height * 0.01;
const PADDING = width * 0.025;
const DETAIL_PADDING = width * 0.04;
export const constants = {
  fontSize: {
    s: 12,
    m: 14,
    l: 16,
    xl: 18,
    xxl: 20,
  },
  icon: {
    small: 10,
    medium: 20,
    big: 30,
  },
  layout: {
    margin: MARGIN,
    padding: PADDING,
    detailPadding: DETAIL_PADDING,
  },
};
