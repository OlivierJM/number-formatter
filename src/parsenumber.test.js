import { removeSymbol, hasPrefix, appendCountryCode } from "./utils";

describe("parseNumber", () => {
  it("should remove the symbol", () => {
    expect(removeSymbol("+260")).toEqual("260");
  });
  it("should display from the third index when it starts with 2", () => {
    expect(hasPrefix("260943434")).toEqual("943434");
  });
  it("should display from the third index when it starts with 0", () => {
    expect(hasPrefix("0943434")).toEqual("943434");
  });
  it("should display from the third index when it starts with 0", () => {
    expect(hasPrefix("0943434")).toEqual("943434");
  });
  it("should remove the symbol and display from the third index", () => {
    expect(hasPrefix(removeSymbol("+0943434"))).toEqual("943434");
  });
  it("should add the country code", () => {
    expect(appendCountryCode("943434", "260")).toEqual("260 943434");
  });
});
