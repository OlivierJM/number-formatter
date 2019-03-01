import * as R from "ramda";

// const removeSymbol:string = num => (num.includes("+") ? num.replace(/\+/gi, "") : num);

function removeSymbol(num: string): string {
  return num.includes("+") ? num.replace(/\+/gi, "") : num;
}

function removePrefix(num: string): string {
  return num[0] === "2"
    ? num.substring(3)
    : num[0] === "0"
    ? num.substring(1)
    : num;
}
// const hasPrefix = num =>
//   num[0] == 2 ? num.substring(3) : num[0] == 0 ? num.substring(1) : num;

const appendCountryCode: any = R.curry(
  (number: string, code: string) =>
    `${code} ${removePrefix(removeSymbol(number))}`
);

const formatNumber: any = R.compose(
  appendCountryCode,
  removePrefix,
  removeSymbol
);

export { formatNumber, removeSymbol, removePrefix };
