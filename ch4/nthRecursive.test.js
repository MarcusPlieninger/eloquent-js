function nthRecursive(inputList, element, counter = 0) {
  if (inputList === null) return inputList
  if (inputList.value === element) return counter
  nthRecursive(inputList.rest, element, counter++)
}

describe('nthRecursive()', () => {
  test('3-element list, property in list', () => {
    expect(nthRecursive(
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
      }, 5
    )).toEqual(2)
  })
  test('3-element list, property not in list', () => {
    expect(nthRecursive(
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
    )).toBeUndefined
  })
})
