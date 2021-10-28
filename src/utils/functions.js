const capitalizer = str => str[0].toUpperCase() + str.slice(1);

const getDeclension = (age) => {
  const declensions = ['год', 'года', 'лет'];
  const cases = [2, 0, 1, 1, 1, 2];
  return declensions[ (age%100>4 && age%100<20)? 2 : cases[(age%10<5)?age%10:5] ];
};

export const getBadgeText = (name, age) => {
  return `${name}, ${age} ${getDeclension(age)}`;
};

export const checkInputs = (obj) => {
  const errors = [];
  for (const key in obj) {
    if (!obj[key]) {
      errors.push(key);
    }
  }

  return errors;
};

export const validateName = (name) => {
  return name
    .replace(/^[\s|-]/gi, '')
    .replace(/[^a-zA-Zа-яА-Я- ]/gi, '')
    .replace(/\s{2}/gi, ' ')
    .replace(/-{2}/gi, '-')
    .replace(/(?<=-)\s/gi, '')
    .replace(/(?<=\s)-/gi, '')
    .replace(/./gi, match => match.toLowerCase())
    .replace(/^./gi, match => capitalizer(match))
    .replace(/(?<=\s)[a-zA-Zа-яА-Я]/gi, match => capitalizer(match))
    .replace(/(?<=-)[a-zA-Zа-яА-Я]/gi, match => capitalizer(match))
    ;
};

const validateAge = (age) => {
  return age.replace(/[^\d]/, '');
};

export const validateInput = (e) => {

  if (e.target.name === 'name') {
    return validateName(e.target.value);
  }

  if (e.target.name === 'age') {
    return validateAge(e.target.value);
  }

  return e.target.value;
};
