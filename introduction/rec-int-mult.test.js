function recIntMult(x, y) {
  // Get n
  const n = String(x).length > String(y).length ? String(x).length : String(y).length;

  // Base case
  if (String(x).length ===1 || String(y).length === 1) return x * y;

  // Recursive case
  const a = Number(String(x).slice(0, n / 2));
  const b = Number(String(x).slice(n / 2));
  const c = Number(String(y).slice(0, n / 2));
  const d = Number(String(y).slice(n / 2));

  const ac = recIntMult(a, c);
  const ad = recIntMult(a, d);
  const bc = recIntMult(b, c);
  const bd = recIntMult(b, d);

  return Number(String(ac) + '0'.repeat(n))
          + Number(String(ad + bc) + '0'.repeat(n / 2))
          + bd;
}


// ====================================================================
// TESTS
// ====================================================================

describe('Testing return type', () => {
  test('It should return a number', () => {
    expect(typeof recIntMult(3, 4)).toStrictEqual('number');
  });
});

describe('Testing n = 1', () => {
  test('It should return 12', () => {
    expect(recIntMult(3, 4)).toStrictEqual(12);
  });
});

describe('Testing n = 2', () => {
  test('It should return 408', () => {
    expect(recIntMult(12, 34)).toStrictEqual(408);
  });
});

describe('Testing n = 4', () => {
  test('It should return 7006652', () => {
    expect(recIntMult(1234, 5678)).toStrictEqual(7006652);
  });
});

describe('Testing n = 8', () => {
  test('It should return 1219326221002896', () => {
    expect(recIntMult(12345678, 98765432)).toStrictEqual(1219326221002896);
  });
});