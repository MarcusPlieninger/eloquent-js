function nthForLoop(inputList, element) {
  let counter = 0
  for (let node = inputList; node; node = node.rest) {
    if (node.value === element) return counter
    if (node === null) return node
    counter++
  }
}

describe('nthForLoop()', () => {
  test('3-element list, property in list', () => {
    expect(nthForLoop(
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
    )).toBe(2)
  })
  test('3-element list, property not in list', () => {
    expect(nthForLoop(
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
