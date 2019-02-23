function min(input1, input2) {
  // input validation - I explain why the order of the if statements matters here
  // first tests for array since isNaN would be positive for an array as well
  if (Array.isArray(input1) || Array.isArray(input2)) return 'Input cannot be an array.'
  // then tests for values that are or coerce to false (eg, false, empty string, so that their
  // negation makes them true, provided that the inputs are not 0, since 0 is a valid input
  if ((!input1 || !input2) && (input1 !== 0 && input2 !== 0)) {
    return 'Please enter an integer or floating point.'
  } // then tests for NaN
  if (Number.isNaN(Number(input1)) || Number.isNaN(Number(input2))) return 'Please, only integer or floating point.'
  // finally, tests for either of the inputs being the Boolean primitive value of true
  if ((input1 === true) || (input2 === true)) return 'True is not a valid input. Please enter an integer or floating point.'

  if (input1 < input2) return input1
  return input2
}

describe('invalid inputs', () => {
  test('string', () => {
    expect(min('Dog', 5)).toBe('Please, only integer or floating point.')
  })
  test('empty string', () => {
    expect(min(10, '')).toBe('Please enter an integer or floating point.')
  })
  test('Boolean false', () => {
    expect(min(false, 20)).toBe('Please enter an integer or floating point.')
  })
  test('Boolean true', () => {
    expect(min(20, true)).toBe('True is not a valid input. Please enter an integer or floating point.')
  })
  test('Array', () => {
    expect(min([1, 2, 3, 4, 5], 20)).toBe('Input cannot be an array.')
  })
})

describe('small inputs', () => {
  test('negative', () => {
    expect(min(-4, 5)).toBe(-4)
  })
  test('zero and positive integer', () => {
    expect(min(5, 0)).toBe(0)
  })
  test('zeros', () => {
    expect(min(0, 0)).toBe(0)
  })
  test('floating point', () => {
    expect(min(1.432534, 2)).toBe(1.432534)
  })
})

describe('medium inputs', () => {
  test('50, 100', () => {
    expect(min(50, 100)).toBe(50)
  })
  test('100, 100', () => {
    expect(min(100, 100)).toBe(100)
  })
  test('floating point', () => {
    expect(min(500.3333, 200.25)).toBe(200.25)
  })
})

describe('large inputs', () => {
  test('1333, -4000', () => {
    expect(min(1333, -4000)).toBe(-4000)
  })
  test('-243609348, 20', () => {
    expect(min(-243609348, 20)).toBe(-243609348)
  })
  test('floating point', () => {
    expect(min(1.24231532643235, 500.123434213)).toBe(1.24231532643235)
  })
})
