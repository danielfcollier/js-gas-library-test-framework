function HaveOwnProperty(testName, object, property) {
  const isTrue = Object.prototype.hasOwnProperty.call(object, property);

  if (isTrue) {
    return true;
  }

  logger(testName, property, object);
  return false;
}
