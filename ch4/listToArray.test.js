function listToArray(inputList) {
  const outputArray = []
  while ('value' in inputList) {
    outputArray.push(inputList.value)
    inputList = Object.assign({}, inputList.rest)
  }
  return outputArray
}

describe('listToArray()', () => {
  test('empty list', () => {
    expect(listToArray({})).toEqual([])
  })
  test('list with 1 value', () => {
    expect(listToArray({ value: 3, rest: null })).toEqual([3])
  })
  test('list with 3 values', () => {
    expect(listToArray({ value: 1, rest: { value: 3, rest: { value: 5, rest: null } } })).toEqual(
      [1, 3, 5]
    )
  })
})
