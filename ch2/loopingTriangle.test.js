function loopingTriangle() {
  // build a triangle as a return value for testing
  let triangle = ''
  for (let line = '#'; line.length < 8; line += '#') {
    console.log(line)
    triangle += `${line}\n`
  }
  return triangle
}

describe('loopingTriangle()', () => {
  test('test return value', () => {
    expect(loopingTriangle()).toBe('#\n##\n###\n####\n#####\n######\n#######\n')
  })
})
