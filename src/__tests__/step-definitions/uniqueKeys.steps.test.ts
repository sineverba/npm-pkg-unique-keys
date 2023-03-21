import { defineFeature, loadFeature } from "jest-cucumber";
import { uniqueKeys } from "../../index";

const feature = loadFeature("./src/__tests__/features/uniqueKeys.feature");

jest.mock("uuid", () => ({ v4: () => "1234-5678-90" }));

defineFeature(feature, (test) => {
  test('Start from {data: "foo"} and returns {uniqueKey: "1234-5678-90", data: "foo"}', ({
    given,
    when,
    then,
  }) => {
    let startingData = [{ data: "foo" }];
    let expectedResult = [{ uniqueKey: "1234-5678-90", data: "foo" }];
    let result: string;

    given(/^{data: "(.*)"}$/, (arg0) => {});

    when("run function", () => {
      result = uniqueKeys(startingData);
    });

    then(
      /^the final object is {uniqueKey: "(.*)", data: "(.*)"}$/,
      (arg0, arg1) => {
        expect(result).toStrictEqual(expectedResult);
      }
    );
  });
});
