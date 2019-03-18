function flatten(arrays) {
// reduce() results in a pure function
  return arrays.reduce((a, b) => a.concat(b))
}

describe('flatten()', () => {
  const arrays1 = [[1, 2, 3], [4, 5], [6]]
  test('example from text', () => {
    expect(flatten(arrays1)).toEqual([1, 2, 3, 4, 5, 6])
    console.log(arrays1) // proves original array is in tact
  })
  test('longer array', () => {
    const arrays2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9], [10, 11, 12], [13, 14], [15]]
    expect(flatten(arrays2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    console.log(arrays2) // proves original array is in tact
  })
})
