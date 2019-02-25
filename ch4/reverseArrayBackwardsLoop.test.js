function reverseArrayBackwardsLoop(arrayInput) {
  const newArray = []
  for (let i = arrayInput.length - 1; i >= 0; i--) {
    newArray.push(arrayInput[i])
  }
  return newArray
}

describe('tests taken from text', () => {
  test('["A", "B", "C"]', () => {
    expect(reverseArrayBackwardsLoop(['A', 'B', 'C'])).toEqual(['C', 'B', 'A'])
  })
  test('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect(reverseArrayBackwardsLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(
      [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    )
  })
})
