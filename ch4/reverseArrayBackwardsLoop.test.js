function reverseArrayBackwardsLoop(arrayInput) {
  const newArray = []
  for (let i = arrayInput.length - 1; i >= 0; i--) {
    newArray.push(arrayInput[i])
  }
  return newArray
}

describe('test taken from text', () => {
  test('["A", "B", "C"]', () => {
    expect(reverseArrayBackwardsLoop(['A', 'B', 'C'])).toEqual(['C', 'B', 'A'])
  })
})
