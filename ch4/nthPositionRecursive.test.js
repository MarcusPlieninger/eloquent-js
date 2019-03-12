function nthPositionRecursive(inputList, position) {
  if (!inputList) return undefined
  if (position === 0) return inputList.value
  return nthPositionRecursive(inputList.rest, position - 1)
}

describe('nthPostionRecursive()', () => {
  test('3-element list, position in range', () => {
    expect(nthPositionRecursive(
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
      }, 2
    )).toBe(5)
  })
  test('3-element list, position not in range', () => {
    expect(nthPositionRecursive(
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
      }, 7
    )).toBe(undefined)
  })
})
