function arrayToList(arrayInput) {
  const list = {}
  let rest = null

  for (let i = list.length; i > 0; i--) {
    list.rest = rest
    list.value = arrayInput[i - 1]
    rest = Object.assign({}, list)
  }
  return list
}

describe('arrayToList()', () => {
  test('empty array', () => {
    expect(arrayToList([])).toEqual({})
  })
  test('array with 1 value', () => {
    expect(arrayToList([3])).toEqual({ value: 3, rest: null })
  })
  test('array with 3 values', () => {
    expect(arrayToList([1, 3, 5])).toEqual(
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
