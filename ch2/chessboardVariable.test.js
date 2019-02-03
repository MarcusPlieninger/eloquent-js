function chessboardVariable(width, height) {
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

describe('small inputs', () => {
  test('3x3', () => {
    expect(chessboardVariable(3)).toEqual('\n# #\n # \n# #\n')
  })
  test('8x8', () => {
    expect(chessboardVariable(8, 8)).toEqual('\n # # # #\n# # # # \n # # # #\n# # # # \n'
                                    + ' # # # #\n# # # # \n # # # #\n# # # # \n')
  })
})
