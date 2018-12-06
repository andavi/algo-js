function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const arr1 = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const arr2 = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  return merge(arr1, arr2);
}

function merge(arr1, arr2) {
  const merged = [];
  while (arr1.length && arr2.length) {
    merged.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }
  return merged.concat(arr1, arr2);
}


// =================================================
// TESTS
// =================================================

describe('Testing merge subroutine with evenly sized arrays', () => {
  test('It should return the merged array', () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('Testing merge subroutine with differing sized arrays', () => {
  test('It should return the merged array', () => {
    expect(merge([1, 3, 5], [2, 4, 6, 7])).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

describe('Testing sorted array', () => {
  test('It should return the sorted array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});

describe('Testing unsorted array', () => {
  test('It should return the sorted array', () => {
    expect(mergeSort([3, 2, 1, 5, 4])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});

describe('Testing reversed array', () => {
  test('It should return the sorted array', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});

describe('Testing unsorted array with repeats', () => {
  test('It should return the sorted array', () => {
    expect(mergeSort([3, 4, 4, 6, 2, 6, 4, 1, 1])).toStrictEqual([1, 1, 2, 3, 4, 4, 4, 6, 6]);
  });
});

describe('Testing empty array', () => {
  test('It should return the empty array', () => {
    expect(mergeSort([])).toStrictEqual([]);
  });
});

describe('Testing single item array with repeats', () => {
  test('It should return the single item', () => {
    expect(mergeSort([1])).toStrictEqual([1]);
  });
});

const arr = [ 
  77,
  61,
  70,
  42,
  90,
  56,
  73,
  77,
  44,
  98,
  34,
  22,
  45,
  16,
  89,
  58,
  70,
  63,
  34,
  65,
  42,
  31,
  46,
  69,
  18,
  91,
  53,
  89,
  45,
  99,
  38,
  35,
  19,
  43,
  24,
  34,
  38,
  8,
  98,
  40,
  57,
  47,
  18,
  34,
  26,
  26,
  52,
  4,
  13,
  58,
  47,
  80,
  59,
  34,
  91,
  54,
  55,
  39,
  90,
  82,
  3,
  88,
  73,
  49,
  15,
  48,
  31,
  6,
  24,
  62,
  50,
  22,
  38,
  59,
  53,
  84,
  9,
  44,
  11,
  39,
  50,
  98,
  24,
  96,
  85,
  55,
  59,
  95,
  15,
  4,
  36,
  94,
  86,
  72,
  10,
  51,
  79,
  28,
  19,
  8 
];

const sorted = [ 
  3,
  4,
  4,
  6,
  8,
  8,
  9,
  10,
  11,
  13,
  15,
  15,
  16,
  18,
  18,
  19,
  19,
  22,
  22,
  24,
  24,
  24,
  26,
  26,
  28,
  31,
  31,
  34,
  34,
  34,
  34,
  34,
  35,
  36,
  38,
  38,
  38,
  39,
  39,
  40,
  42,
  42,
  43,
  44,
  44,
  45,
  45,
  46,
  47,
  47,
  48,
  49,
  50,
  50,
  51,
  52,
  53,
  53,
  54,
  55,
  55,
  56,
  57,
  58,
  58,
  59,
  59,
  59,
  61,
  62,
  63,
  65,
  69,
  70,
  70,
  72,
  73,
  73,
  77,
  77,
  79,
  80,
  82,
  84,
  85,
  86,
  88,
  89,
  89,
  90,
  90,
  91,
  91,
  94,
  95,
  96,
  98,
  98,
  98,
  99 
];

describe('Testing big array with repeats', () => {
  test('It should return the big array sorted', () => {
    expect(mergeSort(arr)).toStrictEqual(sorted);
  });
});