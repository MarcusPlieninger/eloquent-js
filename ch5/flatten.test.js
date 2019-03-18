function flatten(arrays) {
  return arrays.reduce((a, b) => a.concat(b))
}

describe('flatten()', () => {
  test('example from text', () => {
    expect(flatten([[1, 2, 3], [4, 5], [6]])).toEqual([1, 2, 3, 4, 5, 6])
  })
  test('longer array', () => {
    expect(flatten([[1, 2, 3, 4, 5], [6, 7, 8, 9], [10, 11, 12], [13, 14], [15]])).toEqual(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    )
  })
})
