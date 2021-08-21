function FormatDate(date) {
  date = date.split(' ')[0];
  const time = new Date(date);

  const month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  return `${time.getDate()} ${month[time.getMonth()]} ${time.getFullYear()}`;
}

export default FormatDate;
