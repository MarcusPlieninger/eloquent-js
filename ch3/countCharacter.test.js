function countCharacter(theString, theCharacter) {
  let counter = 0
  for (let i = 0; i < theString.length; i++) {
    if (theString[i] === theCharacter) {
      counter++
    }
  }
  return counter
}

function countBs(theString) {
  return countCharacter(theString, 'B')
}
/* Note: the function countBs above is a closure and illustrates the feature known as closure. Why?
It references the binding 'theString' from the local scope of the countCharacter function. */

describe('Various words and phrases', () => {
  test('\'i\' in \'supercalifragilisticexpialidocious\'', () => {
    expect(countCharacter('supercalifragilisticexpialidocious', 'i')).toBe(7)
  })

  test('\'s\' in \'superfluous\'', () => {
    expect(countCharacter('superfluous', 's')).toBe(2)
  })

  test('\'h\' in \'heathen\'', () => {
    expect(countCharacter('heathen', 'h')).toBe(2)
  })

  test('\'o\' in \'double, double, toil and trouble\'', () => {
    expect(countCharacter('double, double, toil and trouble', 'o')).toBe(4)
  })

  test('Boolean', () => {
    expect(countCharacter('Boolean', 'o')).toBe(2)
  })
})

describe('Counting B\'s for simple inputs', () => {
  test('5 \'B\'\'s in a row', () => {
    expect(countBs('BBBBB')).toBe(5)
  })

  test('5 \'b\'\'s in a row', () => {
    expect(countBs('bbbbb')).toBe(0)
  })

  test('\'Banana\'', () => {
    expect(countBs('Banana')).toBe(1)
  })

  test('\'BuBBa\'', () => {
    expect(countBs('BuBBa')).toBe(3)
  })

  test('\'Boolean\'', () => {
    expect(countBs('Boolean')).toBe(1)
  })
})
