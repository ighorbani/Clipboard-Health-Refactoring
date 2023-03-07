const { GenerateCandidate } = require("./generate-candidate");
const {
  GenerateStringCandidate,
  UseInitialData,
  CheckCandidateLength,
} = require("./helpers/helper-functions");


describe("Test UseInitialData function", () => {
  test("If I don't give any arguments, it doesn't return undefined.", () => {
    const candidate = UseInitialData();
    expect(candidate).toBe(undefined);
  });

  test("If we have a partitionKey in the argument, it will be used as candidate.", () => {
    const candidate = UseInitialData({ partitionKey: "1000" });
    expect(candidate).toBe("1000");
  });

  test("If I don't have the partitionKey key in the argument, this function converts the argument into a string and then creates a hash from it.", () => {
    const candidate = UseInitialData({ name: "ALI" });
    expect(typeof candidate).toBe("string");
  });
});

describe("Test GenerateStringCandidate function", () => {
  test("If I don't give an argument, it uses the default value for the candidate.", () => {
    const candidate = GenerateStringCandidate();
    expect(candidate).toBe("0");
  });

  test("If the argument is not a string, it will convert it to a string.", () => {
    const candidate = GenerateStringCandidate({ name: "ALI" });
    expect(typeof candidate).toBe("string");
  });
});

describe("Test CheckCandidateLength function", () => {
  test("If the default value is used for the candidate, it returns the same value.", () => {
    const candidate = CheckCandidateLength("0");
    expect(candidate).toBe("0");
  });

  test("If the length of the candidate is up to the allowed value, it returns the same.", () => {
    const allowedStringLength =
      "62VB038tqxN2Tv5zRxMf3axs6ZlgU8AH5vFjtkaevD6G2GKjtu9cbYGuHTWPq26JjdKZGrWyiUDUVMzA7u6ffTY2mYw7PL2ImYqiu1UodM3urlXSBAXPOypzP9ayTNN5T2GSUMbCRurGrsXdoe3VsxjLApojYW6Vxy0CJOgDH6X7haYVj1EWNgR0G23fryAD9FDWO3JGtLIDc1B6Au2AG8sX2TlQO1034iHM7CP7O7Gwfo1qiLPt05Ng9K1jQWJx";
    const candidate = CheckCandidateLength(allowedStringLength);
    expect(candidate).toBe(allowedStringLength);
  });

  test("If the length of the candidate that we give as an argument is greater than the allowed limit, it will generate the candidate once again.", () => {
    const longString =
      "62VB038CtqxN2Tv5zRxMf3axs6ZlgU8AH5vFjtkaevD6G2GKjtu9cbYGuHTWPq26JjdKZGrWyiUDUVMzA7u6ffTY2mYw7PL2ImYqiu1UodM3urlXSBAXPOypzP9ayTNN5T2GSUMbCRurGrsXdoe3VsxjLApojYW6Vxy0CJOgDH6X7haYVj1EWNgR0G23fryAD9FDWO3JGtLIDc1B6Au2AG8sX2TlQO1034iHM7CP7O7Gwfo1qiLPt05Ng9K1jQWJx";
    const candidate = CheckCandidateLength(longString);
    expect(candidate).not.toBe(longString);
    expect(typeof candidate).toBe("string");
  });
});

describe("Test to check the main function: GenerateCandidate", () => {
  test("If we don't give any arguments, it will create a candidate with zero value for us.", () => {
    const candidate = GenerateCandidate();
    expect(candidate).toBe("0");
  });

  test("If we have a partitionKey in the argument, it will be used as candidate.", () => {
    const candidate = UseInitialData({ partitionKey: "1000" });
    expect(candidate).toBe("1000");
  });

  test("If the argument does not have a partitionKey key, an encrypted string will be created as candidate.", () => {
    const candidate = GenerateStringCandidate({ name: "ALI" });
    expect(typeof candidate).toBe("string");
  });
});
