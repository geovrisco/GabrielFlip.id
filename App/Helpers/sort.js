export const AscendingSort = (data, key, isDate = false) => {
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
export const DescendingSort = (data, key, isDate = false) => {
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
