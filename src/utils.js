const removeSymbol = num => (num.includes("+") ? num.replace(/\+/gi, "") : num);

const hasPrefix = num =>
  num[0] == 2 ? num.substring(3) : num[0] == 0 ? num.substring(1) : num;

const appendCountryCode = (number, code) =>
  `${code} ${hasPrefix(removeSymbol(number))}`;

export { removeSymbol, hasPrefix, appendCountryCode };
