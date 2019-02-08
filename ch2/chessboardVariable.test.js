function chessboardVariable(width, height) {
  // input validation - I explain why the order of the if statements matters here

  if (!width || !height) return 'Please enter positive integers only.'
  
  // first tests for array since isNaN would be positive for an array as well
  if (Array.isArray(width) || Array.isArray(height)) return 'Chessboard size cannot be an array.'
  // then tests for NaN (e.g., String, Boolean, undefined, null)
  if (Number.isNaN(Number(width)) || Number.isNaN(Number(height))) return 'Please enter positive integers only.'
  // then tests for 0 or empty string

  // then tests for Infinity since test for floating point would be positive for Infinity as well
  if (width === Infinity || height === Infinity) return 'Chessboard size cannot be infinite.'
  // then tests for floating point number
  if (width % 1 !== 0 || height % 1 !== 0) return 'Chessboard size cannot be floating point.'
  // then tests for negative numbers
  if (width < 0 || height < 0) return 'Chessboard size cannot be negative.'

  let row = '\n'
  let i
  let j

  for (i = 1; i <= height; i++) {
    if (i % 2 !== 0) {
      for (j = 1; j <= width; j++) {
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
    expect(chessboardVariable('dog', 5)).toEqual('Please enter positive integers only.')
  })
  test('Boolean', () => {
    expect(chessboardVariable(10, false)).toEqual('Please enter positive integers only.')
  })
  test('null', () => {
    expect(chessboardVariable(null, 5)).toEqual('Please enter positive integers only.')
  })
  test('undefined', () => {
    expect(chessboardVariable(10, undefined)).toEqual('Please enter positive integers only.')
  })
  test('empty string', () => {
    expect(chessboardVariable(6, '')).toEqual('Please enter positive integers only.')
  })
  test('zero', () => {
    expect(chessboardVariable(0, 10)).toEqual(
      'Chessboard size cannot be empty.'
    )
  })
  test('negative integer', () => {
    expect(chessboardVariable(5, -3)).toEqual(
      'Chessboard size cannot be negative.'
    )
  })
  test('floating point', () => {
    expect(chessboardVariable(2.43, 5)).toEqual(
      'Chessboard size cannot be floating point.'
    )
  })
  test('Infinity', () => {
    expect(chessboardVariable(10, Infinity)).toEqual(
      'Chessboard size cannot be infinite.'
    )
  })
  test('Array', () => {
    expect(chessboardVariable(10, [1, 2, 3, 4, 5])).toEqual(
      'Chessboard size cannot be an array.'
    )
  })
})

describe('small inputs', () => {
  test('2x2', () => {
    expect(chessboardVariable(3)).toEqual('\n # #\n# # \n')
  })
  test('3x5', () => {
    expect(chessboardVariable(3)).toEqual('\n# # # \n # # #\n# # # \n # # #\n# # # \n')
  })
  test('8x8', () => {
    expect(chessboardVariable(8, 8)).toEqual('\n # # # #\n# # # # \n # # # #\n# # # # \n'
                                    + ' # # # #\n# # # # \n # # # #\n# # # # \n')
  })
})

describe('medium inputs', () => {
  test('10x2', () => {
    expect(chessboardVariable()).toEqual('# # # # # # # # # #\n'
                                       + ' # # # # # # # # # #\n')
  })
  test('2x10', () => {
    expect(chessboardVariable()).toEqual('# #\n # #\n# #\n # #\n# #\n'
                                       + ' # #\n# #\n # #\n# #\n # #\n')
  })
})

describe('large input', () => {
  test('12x14', () => {
    expect(chessboardVariable(20, 20)).toEqual('# # # # # # # # # # # #\n'
                                             + ' # # # # # # # # # # # #\n'
                                             + '# # # # # # # # # # # #\n'
                                             + ' # # # # # # # # # # # #\n'
                                             + '# # # # # # # # # # # #\n'
                                             + ' # # # # # # # # # # # #\n'
                                             + '# # # # # # # # # # # #\n'
                                             + ' # # # # # # # # # # # #\n'
                                             + '# # # # # # # # # # # #\n'
                                             + ' # # # # # # # # # # # #\n'
                                             + '# # # # # # # # # # # #\n'
                                             + ' # # # # # # # # # # # #\n'
                                             + '# # # # # # # # # # # #\n'
                                             + ' # # # # # # # # # # # #\n')
  })
})
