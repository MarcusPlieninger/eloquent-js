function reverseArray(arrayInput) {
  const newArray = []
  for (const i of arrayInput) {
    newArray.push(arrayInput.pop(i))
  }
  return newArray
}

describe('test taken from text', () => {
  test('["A", "B", "C"]', () => {
    expect(reverseArray(['A', 'B', 'C'])).toBe(['C', 'B', 'A'])
  })
})
