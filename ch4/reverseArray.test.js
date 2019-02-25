function reverseArrayUnshift(arrayInput) {
  const newArray = []
  for (const i of arrayInput) {
    newArray.unshift(i)
  }
  return newArray
}

describe('test taken from text', () => {
  test('["A", "B", "C"]', () => {
    expect(reverseArrayUnshift(['A', 'B', 'C'])).toEqual(['C', 'B', 'A'])
  })
})
