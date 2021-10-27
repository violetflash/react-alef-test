const getDeclension = (age) => {

  switch (true) {
    case (age % 100) > 4 && (age % 100) < 20:
      return 'лет';
    case (age % 10) < 5 && (age % 10) > 1:
      return 'года';
    case (age % 10 === 1):
      return 'год';
    default:
      return 'лет';
  }
};


export const getBadgeText = (name, age) => {
  return `${name}, ${age} ${getDeclension(age)}`;
}

export const checkInputs = (obj) => {
  for (const key in obj) {
    if (!obj[key]) return false;
  }

  return true;
};