import * as R from "ramda";

const removeSymbol = num => (num.includes("+") ? num.replace(/\+/gi, "") : num);

const hasPrefix = num =>
  num[0] == 2 ? num.substring(3) : num[0] == 0 ? num.substring(1) : num;

const appendCountryCode = R.curry(
  (number, code) => `${code} ${hasPrefix(removeSymbol(number))}`
);

const formatNumber = R.compose(
  appendCountryCode,
  hasPrefix,
  removeSymbol
);

export { formatNumber };
