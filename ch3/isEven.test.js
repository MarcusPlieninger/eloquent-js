function isEven(theNumber) {
  // draft solution
  if (theNumber === 0) return true
  if (theNumber === 1) return false
  isEven(theNumber - 2)
}
// draft tests
describe('invalid inputs', () => {
  test('string', () => {
    expect(isEven('Dog')).toBe('Please enter a positive or negative integer.')
  })

  test('empty string', () => {
    expect(isEven('')).toBe('Please enter a positive or negative integer.')
  })

  test('Boolean', () => {
    expect(isEven(false)).toBe('Please enter a positive or negative integer.')
  })

  test('Array', () => {
    expect(isEven([1, 2, 3, 4, 5])).toBe('Input cannot be an array.')
  })

  test('floating point', () => {
    expect(isEven(1.432534, 2)).toBe('Input cannot be floating point.')
  })
})

describe('small inputs', () => {
  test('negative', () => {
    expect(isEven(-4)).toBe(true)
  })
  test('zero', () => {
    expect(isEven(0)).toBe(true)
  })
  test('even', () => {
    expect(isEven(2)).toBe(true)
  })
  test('odd', () => {
    expect(isEven(3)).toBe(true)
  })
})

describe('medium inputs', () => {
  test('medium positive', () => {
    expect(isEven(50)).toBe(true)
  })
  test('medium negative', () => {
    expect(isEven(101)).toBe(false)
  })
})

describe('large inputs', () => {
  test('large positive', () => {
    expect(isEven(1333, -4000)).toBe(-4000)
  })
  test('large negative', () => {
    expect(isEven(-243609348, 20)).toBe(-243609348)
  })
})
