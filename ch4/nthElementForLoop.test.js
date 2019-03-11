function nthElementForLoop(inputList, element) {
  let position = 0
  for (let node = inputList; node; node = node.rest) {
    if (node.value === element) return position
    if (node === null) return node
    position++
  }
}

describe('nthElementForLoop()', () => {
  test('3-element list, property in list', () => {
    expect(nthElementForLoop(
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
    expect(nthElementForLoop(
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
