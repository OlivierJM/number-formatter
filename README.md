# number-formatter

check it out here in action https://codesandbox.io/s/github/OlivierJM/number-formatter

> Say you are getting input from your users and you want to format it in a zambian mobile format.

**Note**: This will be extended to accomodate more country codes

The number can either be **+2609XXXXXX**, **09XXXXXXXX**, **9XXXXXXXX** The total count of this number should be 10 and because this number can include the '+'
sign, you should pass it as a string.

The return value should be formatted as follows **260 9XXXXXXXX**

`appendCode(number)` ==> 260 9XXXXXXXX

## Included Functions

`removeSymbol` Checks if the number has a symbol in front and removes it, this is in case the number had a country code already.

`hasPrefix` This checks if the country code existed, it runs after removing the symbol

`appendCountryCode` This is a curried function, it appends the '260' with a space after it.

`formatNumber` This combines other functions to properly format the number

```Javascript

    const formatNumber = R.compose(
        appendCountryCode,
        hasPrefix,
        removeSymbol
    );
    // To use the above, you will need to do the following
    formatNumber(number)(code) // code being a country code

```

Checking Tests, tests are located in `src/format.test.js`

```Javascript

  it("should add the country when number starts with 9", () => {
    expect(formatNumber("943434")("260")).toEqual("260 943434");
  });

  it("should format even if the country code existed", () => {
    expect(formatNumber("+260943434")("260")).toEqual("260 943434");
  });

  it("should format even if number is spaced out", () => {
    expect(formatNumber("+260 943434")("260")).toEqual("260 943434");
  });

```
