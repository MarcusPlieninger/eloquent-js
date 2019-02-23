function isEven(aNumber) {
  // input validation - I explain why the order of the if statements matters here
  // first tests for array since isNaN would be positive for an array as well
  if (Array.isArray(aNumber)) return 'Input cannot be an array.'
  // then tests for values that are or coerce to false (eg, false, empty string, so that their
  // negation makes them true, provided that the inputs are not 0, since 0 is a valid input
  if ((!aNumber) && (aNumber !== 0)) return 'Please enter a positive or negative integer.'
  // then tests for NaN
  if (Number.isNaN(Number(aNumber))) return 'Please, only a positive or negative integer.'
  // then tests for either of the inputs being the Boolean primitive value of true
  if (aNumber === true) return 'True is not a valid input. Please enter a positive or negative integer.'
  // finally tests for floating point
  if (aNumber % 1 !== 0) {
    return 'Input cannot be floating point. Please enter only a postiive or negative integer.'
  }

  if (aNumber === 0) {
    return true
  }
  if (aNumber === 1) {
    return false
  }
  if (aNumber > 0) {
    return isEven(aNumber - 2)
  }
  if (aNumber < 0) {
    return isEven(aNumber + 2)
  }
}

describe('invalid inputs', () => {
  test('string', () => {
    expect(isEven('Dog')).toBe('Please, only a positive or negative integer.')
  })
  test('empty string', () => {
    expect(isEven('')).toBe('Please enter a positive or negative integer.')
  })
  test('Boolean: false', () => {
    expect(isEven(false)).toBe('Please enter a positive or negative integer.')
  })
  test('Boolean: true', () => {
    expect(isEven(true)).toBe('True is not a valid input. Please enter a positive or negative integer.')
  })
  test('Array', () => {
    expect(isEven([1, 2, 3, 4, 5])).toBe('Input cannot be an array.')
  })

  test('floating point', () => {
    expect(isEven(1.432534)).toBe('Input cannot be floating point. Please enter only a postiive or negative integer.')
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
    expect(isEven(3)).toBe(false)
  })
})

describe('medium inputs', () => {
  test('medium positive', () => {
    expect(isEven(50)).toBe(true)
  })
  test('medium negative', () => {
    expect(isEven(75)).toBe(false)
  })
})

describe('large inputs', () => {
  test('large positive', () => {
    expect(isEven(500)).toBe(true)
  })
  test('large negative', () => {
    expect(isEven(-331)).toBe(false)
  })
})
