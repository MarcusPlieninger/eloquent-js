function loopingTriangle() {
  let triangle = ''
  for (let line = '#'; line.length < 8; line += '#') {
    triangle = line + '\n'
  return triangle
  }

describe('loopingTriangle()', () => {
  test('makes triangle of 7 lines', () => {
    expect(loopingTriangle()).stringContaining('#\n##\n###\n####\n#####\n######\n#######\n')
    })
  })
}
