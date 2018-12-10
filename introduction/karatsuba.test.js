const karatsuba = require('./karatsuba');


// =================================================
// TESTS
// =================================================

describe('Testing return type', () => {
  test('It should return a number', () => {
    expect(typeof karatsuba(3, 4)).toStrictEqual('number');
  });
});

describe('Testing n = 1', () => {
  test('It should return 12', () => {
    expect(karatsuba(3, 4)).toStrictEqual(12);
  });
});

describe('Testing n = 2', () => {
  test('It should return 408', () => {
    expect(karatsuba(12, 34)).toStrictEqual(408);
  });
});

describe('Testing n = 4', () => {
  test('It should return 7006652', () => {
    expect(karatsuba(1234, 5678)).toStrictEqual(7006652);
  });
});

describe('Testing n = 8', () => {
  test('It should return 1219326221002896', () => {
    expect(karatsuba(12345678, 98765432)).toStrictEqual(1219326221002896);
  });
});

describe('Testing different length inputs', () => {
  test('It should return 999890001', () => {
    expect(karatsuba(99999, 9999)).toStrictEqual(999890001);
  });
});

describe('Testing different length inputs', () => {
  test('It should return 999890001', () => {
    expect(karatsuba(9999, 99999)).toStrictEqual(999890001);
  });
});