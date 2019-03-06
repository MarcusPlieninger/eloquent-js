function listToArray(listInput) {
  const arrayOutput = []
  while ('value' in listInput) {
    arrayOutput.push(listInput.value)
    delete listInput.value
    listInput = listInput.rest
  }
  return arrayOutput
}

describe('listToArray()', () => {
  test('empty list', () => {
    expect(listToArray({})).toEqual([])
  })
  test('list with 1 value', () => {
    expect(listToArray({ value: 3, rest: null })).toEqual([3])
  })
  test('list with 3 values', () => {
    expect(listToArray([1, 3, 5])).toEqual(
      {
        value : 1,
        rest  : {
          value : 3,
          rest  : {
            value : 5,
            rest  : null
          }
        }
      }
    )
  })
})
