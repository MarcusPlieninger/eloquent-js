function arrayToList(arrayInput) {
  const list = {}
  for (const entry of arrayInput) {
    list.value = entry
  }
  return list
}

describe('arrayToList()', () => {
  test('empty array', () => {
    expect(arrayToList([])).toEqual({})
  })
  test('array with 1 value', () => {
    expect(arrayToList([3])).toEqual({ rest: null, value: 3 })
  })
})
