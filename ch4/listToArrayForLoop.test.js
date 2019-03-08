function listToArrayForLoop(inputList) {
  const outputArray = []
  for (let node = inputList; node; node = node.rest) {
    outputArray.push(node.value)
  }
  return outputArray
}

describe('listToArrayForLoop()', () => {
  test('empty list', () => {
    expect(listToArrayForLoop({})).toEqual([])
  })
  test('list with 1 value', () => {
    expect(listToArrayForLoop({ value: 3, rest: null })).toEqual([3])
  })
  test('list with 3 values', () => {
    expect(listToArrayForLoop(
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
