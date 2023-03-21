import { uniqueKeys } from "../../index";

jest.mock("uuid", () => ({ v4: () => "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d" }));

describe("Test uniqueKeys", () => {
  it("Should add uniqueKey key to an array of object", () => {
    const data = [
      {
        key: "fooKey",
        value: "fooValue",
      },
    ];
    const expectedResult = [
      {
        key: "fooKey",
        value: "fooValue",
        uniqueKey: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      },
    ];
    expect(uniqueKeys(data)).toStrictEqual(expectedResult);
  });
});
