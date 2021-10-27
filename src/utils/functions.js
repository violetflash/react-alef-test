export const getAgeEnding = (age) => {
  const res = age % 10;

  switch (true) {
  case age > 10 && age < 15:
    return 'лет';
  case res === 1:
    return 'год';
  case res < 5:
    return 'года';

  default:
    return 'лет';
  }
};
