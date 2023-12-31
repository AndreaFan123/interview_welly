import {
  reverseString,
  filterGreaterThanFive,
  formatName2,
} from "../src/index";

describe("reverseString", () => {
  it("should reverse a string", () => {
    expect(reverseString("welly")).toEqual("yllew");
  });
});

describe("filterGreaterThanFive", () => {
  it("should output numbers that are greater than 5", () => {
    expect(filterGreaterThanFive([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
      6, 7, 8, 9,
    ]);
  });
});

describe("formatName2", () => {
  it("should format name", () => {
    expect(formatName2("Tony", "Stark")).toEqual("Tony Stark");
  });
});
