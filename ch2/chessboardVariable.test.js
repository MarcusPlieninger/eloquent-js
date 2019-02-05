function chessboardVariable(width, height) {
// input validation
// is there a way to apply OR operator here?
  if width || height (Number.isNaN(Number(size)))

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