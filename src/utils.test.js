import { getResulutionValue, getPxValue } from "./utils";

describe("getPxValue", () => {
  it("returns px value when value exists", () => {
    const value = 5000;
    expect(getPxValue(value)).toEqual("5000px");
  });

  it("returns empty string when value exists", () => {
    const value = undefined;
    expect(getPxValue(value)).toEqual("");
  });
});

describe("getResulutionValue", () => {
  it("returns resolution value when value exists", () => {
    const value = 2000;
    const breakpoint = 20;
    expect(getResulutionValue(value, breakpoint)).toEqual("2000px");
  });

  it("returns resolution value when value is 0", () => {
    const value = 0;
    const breakpoint = 20;
    expect(getResulutionValue(value, breakpoint)).toEqual("0px");
  });

  it("returns empty string when value exists", () => {
    const value = undefined;
    const breakpoint = 50;
    expect(getResulutionValue(value, breakpoint)).toEqual("50px");
  });
});
