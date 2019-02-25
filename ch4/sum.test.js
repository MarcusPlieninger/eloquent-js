function sum(start, end) {
  const sumArray = range(start, end)
  let result = 0
  for (const entry of sumArray) {
    result += entry
  }
  return result
}

function range(start, end) {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

describe('test taken from text', () => {
  test('1 to 10', () => {
    expect(sum(1, 10)).toBe(55)
  })
})
