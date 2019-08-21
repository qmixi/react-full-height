import { getResulutionValue } from "./utils";

describe("getResulutionValue", () => {
  it("returns resolution value when value exists", () => {
    const value = 5000;
    expect(getResulutionValue(value)).toEqual("5000px");
  });

  it("returns empty string when value exists", () => {
    const value = undefined;
    expect(getResulutionValue(value)).toEqual("");
  });
});
