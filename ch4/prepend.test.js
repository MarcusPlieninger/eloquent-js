function prepend(element, inputList) {
  const outputList = {}
  outputList.value = element
  outputList.rest = Object.assign({}, inputList)
  return outputList
}

describe('prepend()', () => {
  test('prepend 1 element to list with 3 values', () => {
    expect(prepend(10, { value: 1, rest: { value: 3, rest: { value: 5, rest: null } } })).toEqual(
      {
        value : 10,
        rest  : {
          value : 1,
          rest  : {
            value : 3,
            rest  : {
              value : 5,
              rest  : null
            }
          }
        }
      }
    )
  })
})
