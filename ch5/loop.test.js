function loop(value, testF, updateF, bodyF) {
  const result = []
  let counter = value
  while (testF(counter)) {
    bodyF
    counter = updateF
  }

  return result
}

describe('loop()', () => {
  test('example from text', () => {
    const anArray = []
    expect(loop(3, n => n > 0, n => n - 1, n => anArray.push(n)).toEqual([3, 2, 1]))
  })
})
