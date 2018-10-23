function loopingTriangle() {
  // build a triangle as a return value for testing
  let triangle = ''
  for (let line = '#'; line.length < 8; line += '#') {
    console.log(line)

    // first line of triangle will have exactly 1 '#' and 1 newline character
    if (line.length === 1) triangle = line + '\n'
    // now we build on the previous triangle
    else if (line.length < 7) triangle += line + '\n'
    // last line of triangle will not have a newline character
    else triangle += line
  }
  return triangle
}

describe('loopingTriangle()', () => {
  test('test return value', () => {
    expect(loopingTriangle()).toBe('#\n##\n###\n####\n#####\n######\n#######')
  })
})
