function reverseArrayInPlaceSwap(arrayInput) {
  for (let i = 0; i < Math.floor(arrayInput.length / 2); i++) {
    const placeholder = arrayInput[i]
    arrayInput[i] = arrayInput[arrayInput.length - 1 - i]
    arrayInput[arrayInput.length - 1 - i] = placeholder
  }
  return arrayInput
}


describe('tests taken from text', () => {
  test('["A", "B", "C"]', () => {
    expect(reverseArrayInPlaceSwap(['A', 'B', 'C'])).toEqual(['C', 'B', 'A'])
  })
  test('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect(reverseArrayInPlaceSwap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(
      [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    )
  })
})
