function formatHistory(data) {
  let result = [];
  for (let key in data) {
    result.push(data[key]);
  }

  return result;
}
export default formatHistory;
