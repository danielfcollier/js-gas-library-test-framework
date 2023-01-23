function ExpectToBeEqual(testName, expected, actual) {
  let isTrue = true;

  const expectedKeys = Object.keys(expected);
  const actualKeys = Object.keys(actual);

  if (expectedKeys.length === actualKeys.length) {
    for (let i = 0; i < expectedKeys.length; i++) {
      const key = expectedKeys[i];
      if (actual[key] !== expected[key]) {
        isTrue = false;
        break;
      }
    }

    if (isTrue) {
      return true;
    }
  }

  logger(testName, expected, actual);
  return false;
}
