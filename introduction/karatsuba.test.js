const karatsuba = require('./karatsuba');


// =================================================
// TESTS
// =================================================

describe('Testing two regular numbers', () => {
  test('It should return the merged array', () => {
    expect(karatsuba(3, 4)).toStrictEqual(12);
  });
});

describe('Testing two regular numbers', () => {
  test('It should return the merged array', () => {
    expect(karatsuba(9999, 99999)).toStrictEqual(999890001);
  });
});