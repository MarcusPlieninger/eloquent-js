function chessboard8x8() {
  let row = ''
  let i
  let j

  for (i = 1; i <= 8; i++) {
    if (i % 2 !== 0) {
      for (j = 1; j <= 8; j++) {
        if (j % 2 !== 0) {
          row += '#'
        } else {
          row += ' '
        }
        if (row.length === 8) {
          row += '\n'
        }
      }
    } else {
      for (j = 1; j <= 8; j++) {
        if (j % 2 !== 0) {
          row += ' '
        } else {
          row += '#'
        }
        if (row.length === 8) {
          row += '\n'
        }
      }
    }
  }
}

describe('simple', () => {
  test('8x8', () => {
    expect(chessboard8x8()).toEqual('# # # #\n # # # #\n# # # #\n # # # #\n'
                                    + '# # # #\n # # # #\n# # # #\n # # # #\n')
  })
})
