function nth(inputList, element) {
  let i = 0
  if ('value' in inputList === false) return 'The element is not in the list.'
  if (inputList.value === element) return i
  i++
  nth(inputList.rest, element)
}


describe('nth()', () => {
  test('empty list', () => {
    expect(nth({}, 5)).toBe('The element is not in the list.')
  })
  test('3-element list', () => {
    expect(nth({ value: 1, rest: { value: 3, rest: { value: 5, rest: null } } }, 5)).toBe(2)
  })
})
