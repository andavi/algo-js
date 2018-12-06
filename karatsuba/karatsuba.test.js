function karatsuba(a, b) {
  // TODO
  return a * b;
}


// =================================================
// TESTS
// =================================================

describe('Testing two regular numbers', () => {
  test('It should return the merged array', () => {
    expect(karatsuba(9999, 99999)).toStrictEqual(999890001);
  });
});