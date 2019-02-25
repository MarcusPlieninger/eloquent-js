function rangeModified(start, end, step = 1) {
  const result = []
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      result.push(i)
    }
    return result
  }
  for (let i = start; i >= end; i -= -step) {
    result.push(i)
  }
  return result
}
describe('tests taken from text', () => {
  test('1 to 10, default increment', () => {
    expect(rangeModified(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  test('5 to 2, decrement of 1', () => {
    expect(rangeModified(5, 2, -1)).toEqual([5, 4, 3, 2])
  })
})
