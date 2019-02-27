function arraytoList(arrayInput) {
  const list = {}
  for (const entry of arrayInput) {
    list.value = entry
  }
  return list
}

describe('arrayToList()', () => {
  test('empty array', () => {
    expect(arraytoList([])).toEqual({})
  })
})
