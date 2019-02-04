function chessboardVariable(width, height) {
// input validation
  if (Number.isNaN(Number(size)))



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
    expect(chessboardVariable()).toEqual('')
  })
  test('empty string', () => {
    expect(chessboardVariable()).toEqual('')
  })
  test('zero', () => {
    expect(chessboardVariable()).toEqual('')
  })
  test('negative integer', () => {
    expect(chessboardVariable()).toEqual('')
  })
  test('floating point', () => {
    expect(chessboardVariable()).toEqual('')
  })
  test('Boolean', () => {
    expect(chessboardVariable()).toEqual('')
  })
})

describe('small square inputs', () => {
  test('3x3', () => {
    expect(chessboardVariable(3)).toEqual('\n# #\n # \n# #\n')
  })
  test('8x8', () => {
    expect(chessboardVariable(8, 8)).toEqual('\n # # # #\n# # # # \n # # # #\n# # # # \n'
                                    + ' # # # #\n# # # # \n # # # #\n# # # # \n')
  })
})

describe('medium square inputs, () => {
  test('string', () => {
    expect(chessboardVariable()).toEqual('')
  })
  test('empty string', () => {
    expect(chessboardVariable()).toEqual('')
  })
  test('zero', () => {
    expect(chessboardVariable()).toEqual('')
  })
  test('negative integer', () => {
    expect(chessboardVariable()).toEqual('')
  })
  test('floating point', () => {
    expect(chessboardVariable()).toEqual('')
  })
  test('Boolean', () => {
    expect(chessboardVariable()).toEqual('')
  })
})