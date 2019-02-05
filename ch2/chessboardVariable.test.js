function chessboardVariable(width, height) {
// input validation
// first tests for NaN (e.g., String, Boolean, undefined, null)
if (Number.isNaN(Number(width)) || Number.isNaN(Number(height)))
  return 'Please enter positive integers only.'
// then tests for 0 or empty string
if (!width || !height)
  return 'Chessboard size cannot be 0.'
// then tests for floating point number
if (width % 1 !== 0 || height % 1 !== 0 ) 
  return 'Chessboard size cannot be floating point.'
// then tests for negative numbers
if (width < 0 || height < 0)
  return 'Chessboard size must be positive.'

// then tests for Infinity

  return 'Chessboard size cannot be infinite.'
// then tests for array

  return 'Chessboard size cannot be an array.'

  let row = '\n'
  let i
  let j

  for (i = 1; i <= height; i++) {
    if (i % 2 !== 0) {
      for (j = 1; j <=width; j++) {
        if (j % 2 !== 0) {
          row += ' '
        } else {
          row += '#'
        }
      }
      row += '\n'
    } else {
      for (j = 1; j <= width; j++) {
        if (j % 2 !== 0) {
          row += '#'
        } else {
          row += ' '
        }
      }
      row += '\n'
    }
  }
  return row
}

describe('invalid inputs', () => {
  test('string', () => {
    expect(chessboardVariable('dog', 5)).toEqual('')
  })
  test('empty string', () => {
    expect(chessboardVariable(6, '')).toEqual('')
  })
  test('zero', () => {
    expect(chessboardVariable(0, 10)).toEqual('')
  })
  test('negative integer', (5, -3) => {
    expect(chessboardVariable()).toEqual('')
  })
  test('floating point', (2.43, 5) => {
    expect(chessboardVariable()).toEqual('')
  })
  test('Boolean', (10, false) => {
    expect(chessboardVariable()).toEqual('')
  })
  test('Infinity', (10, false) => {
    expect(chessboardVariable()).toEqual('')
  })
  test('Null', (10, false) => {
    expect(chessboardVariable()).toEqual('')
  })
  test('Undefined', (10, false) => {
    expect(chessboardVariable()).toEqual('')
})

describe('small inputs', () => {
  test('3x3', () => {
    expect(chessboardVariable(3)).toEqual('\n# #\n # \n# #\n')
  })
  test('8x8', () => {
    expect(chessboardVariable(8, 8)).toEqual('\n # # # #\n# # # # \n # # # #\n# # # # \n'
                                    + ' # # # #\n# # # # \n # # # #\n# # # # \n')
  })
})

describe('medium inputs', () => {
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
})

describe('large inputs', () => {
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
  test(, () => {
    expect(chessboardVariable()).toEqual('')
  })
})