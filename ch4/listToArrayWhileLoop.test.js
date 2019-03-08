function listToArrayWhileLoop(inputList) {
  const outputArray = []
  while ('value' in inputList) {
    outputArray.push(inputList.value)
    inputList = Object.assign({}, inputList.rest)
  }
  return outputArray
}

describe('listToArrayWhileLoop()', () => {
  test('empty list', () => {
    expect(listToArrayWhileLoop({})).toEqual([])
  })
  test('list with 1 value', () => {
    expect(listToArrayWhileLoop({ value: 3, rest: null })).toEqual([3])
  })
  test('list with 3 values', () => {
    expect(listToArrayWhileLoop(
      {
        value : 1,
        rest  :
        {
          value : 3,
          rest  :
          {
            value : 5,
            rest  : null
          }
        }
      }
    )).toEqual([1, 3, 5])
  })
})
