function countBs(theString) {
  let counter = 0
  for (let i = 0; i < theString.length; i++) {
    if (theString[i] === 'B') {
      counter++
    }
  }
  return counter
}

describe('simple inputs', () => {
  test('5 B\'s in a row', () => {
    expect(countBs('BBBBB')).toBe(5)
  })

  test('5 b\'s in a row', () => {
    expect(countBs('bbbbb')).toBe(0)
  })

  test('Banana', () => {
    expect(countBs('Banana')).toBe(1)
  })

  test('BuBBa', () => {
    expect(countBs('BuBBa')).toBe(3)
  })

  test('Boolean', () => {
    expect(countBs('Boolean')).toBe(1)
  })
})
