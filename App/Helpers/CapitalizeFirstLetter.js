function CapitalizeFirstLetter(letter = '') {
  if (letter.length <= 4) return letter.toUpperCase();
  const uppercase = letter.toLowerCase();
  return uppercase.charAt(0).toUpperCase() + uppercase.slice(1);
}

export default CapitalizeFirstLetter;
