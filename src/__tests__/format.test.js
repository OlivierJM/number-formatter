import { removeSymbol, hasPrefix, formatNumber } from "../utils";

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

  // Test different cases for formatting numbers
  it("should add the country when number starts with 9", () => {
    expect(formatNumber("943434")("260")).toEqual("260 943434");
  });
  it("should format even if the code existed", () => {
    expect(formatNumber("+260943434")("260")).toEqual("260 943434");
  });
  it("should format even if number is spaced out", () => {
    expect(formatNumber("+260 943434")("260")).toEqual("260 943434");
  });
});
