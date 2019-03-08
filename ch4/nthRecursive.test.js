function nthRecursive(inputList, element) {
  let i = 0
  if ('value' in inputList === false) return 'The element is not in the list.'
  if (inputList.value === element) return i
  i++
  nthRecursive(inputList.rest, element)
}


describe('nthRecursive()', () => {
  test('empty list', () => {
    expect(nthRecursive({}, 5)).toBe('The element is not in the list.')
  })
  test('3-element list', () => {
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
    )).toBe(2)
  })
})
