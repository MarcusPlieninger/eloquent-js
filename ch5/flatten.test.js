function flatten(arrays) {
  return arrays.reduce((a, b) => a.concat(b))
}

describe('flatten()', () => {
  test('example from text', () => {
    const arrays1 = [[1, 2, 3], [4, 5], [6]]
    expect(flatten(arrays1)).toEqual([1, 2, 3, 4, 5, 6])
  })
  test('longer array', () => {
    const arrays2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9], [10, 11, 12], [13, 14], [15]]
    expect(flatten(arrays2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  })
})
