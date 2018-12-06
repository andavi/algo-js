function mergeSort(arr) {
  // TODO
  return arr;
}

function merge(arr1, arr2) {
  // TODO
}



// =================================================
// TESTS
// =================================================

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
  })
})