function everyLoop(anArray, aPredicate) {
  for (const n of anArray) {
    if (aPredicate(n) === false) return false
  }
  return true
}

function everySome(anArray, aPredicate) {
  return (!anArray.some(n => !aPredicate(n)))
}

describe('everyLoop()', () => {
  test('examples from text', () => {
    expect(everyLoop([1, 3, 5], n => n < 10)).toEqual(true)
    expect(everyLoop([2, 4, 16], n => n < 10)).toEqual(false)
    expect(everyLoop([], n => n < 10)).toEqual(true)
  })
})

describe('everySome()', () => {
  test('examples from text', () => {
    expect(everySome([1, 3, 5], n => n < 10)).toEqual(true)
    expect(everySome([2, 4, 16], n => n < 10)).toEqual(false)
    expect(everySome([], n => n < 10)).toEqual(true)
  })
})

/* Add explanation here for how the .some() method variation makes use of De Morgan's laws.*/
