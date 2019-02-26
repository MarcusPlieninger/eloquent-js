function reverseArrayInPlaceEasy(inputArray) {
  return inputArray.reverse()
}

describe('tests taken from text', () => {
  test('["A", "B", "C"]', () => {
    expect(reverseArrayInPlaceEasy(['A', 'B', 'C'])).toEqual(['C', 'B', 'A'])
  })
  test('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect(reverseArrayInPlaceEasy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(
      [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    )
  })
})

