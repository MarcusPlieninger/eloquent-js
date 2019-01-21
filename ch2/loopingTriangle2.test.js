function loopingTriangle2(size) {
  // input validation
  if (isNaN(size)) return 'C\'mon, man, just enter a number.'
  if (!size) return 'Please enter a p-o-s-i-t-v-e i-n-t-e-g-er.'
  if (size % 1 !== 0) return 'Triangle size cannot be floating point.'
  if (size < 0) return 'Triangle size must be positive.'

  let triangle = ''
  for (let line = '#'; line.length <= size; line += '#') {
    //  console.log(line)
    triangle += `${line}\n`
  }
  return triangle
}

describe('invalid inputs', () => {
  test('large negative integer', () => {
    expect(loopingTriangle2(-230)).toBe('Triangle size must be positive.')
  })

  test('string', () => {
    expect(loopingTriangle2('Dog')).toBe('C\'mon, man, just enter a number.')
  })

  test('empty string', () => {
    expect(loopingTriangle2('')).toBe('Please enter a p-o-s-i-t-v-e i-n-t-e-g-er.')
  })

  test('zero', () => {
    expect(loopingTriangle2(0)).toBe('Please enter a p-o-s-i-t-v-e i-n-t-e-g-er.')
  })

  test('Boolean', () => {
    expect(loopingTriangle2(false)).toBe('Please enter a p-o-s-i-t-v-e i-n-t-e-g-er.')
  })

  test('floating point', () => {
    expect(loopingTriangle2(2.4325)).toBe('Triangle size cannot be floating point.')
  })
})

describe('small inputs', () => {
  test('3', () => {
    expect(loopingTriangle2(3)).toBe('#\n##\n###\n')
  })
  test('5', () => {
    expect(loopingTriangle2(5)).toBe('#\n##\n###\n####\n#####\n')
  })
})

describe('medium inputs', () => {
  test('10', () => {
    expect(loopingTriangle2(10)).toBe(
      '#\n'
      + '##\n'
      + '###\n'
      + '####\n'
      + '#####\n'
      + '######\n'
      + '#######\n'
      + '########\n'
      + '#########\n'
      + '##########\n'
    )
  })
  test('50', () => {
    expect(loopingTriangle2(50)).toBe(
      '#\n'
      + '##\n'
      + '###\n'
      + '####\n'
      + '#####\n'
      + '######\n'
      + '#######\n'
      + '########\n'
      + '#########\n'
      + '##########\n'
      + '###########\n'
      + '############\n'
      + '#############\n'
      + '##############\n'
      + '###############\n'
      + '################\n'
      + '#################\n'
      + '##################\n'
      + '###################\n'
      + '####################\n'
      + '#####################\n'
      + '######################\n'
      + '#######################\n'
      + '########################\n'
      + '#########################\n'
      + '##########################\n'
      + '###########################\n'
      + '############################\n'
      + '#############################\n'
      + '##############################\n'
      + '###############################\n'
      + '################################\n'
      + '#################################\n'
      + '##################################\n'
      + '###################################\n'
      + '####################################\n'
      + '#####################################\n'
      + '######################################\n'
      + '#######################################\n'
      + '########################################\n'
      + '#########################################\n'
      + '##########################################\n'
      + '###########################################\n'
      + '############################################\n'
      + '#############################################\n'
      + '##############################################\n'
      + '###############################################\n'
      + '################################################\n'
      + '#################################################\n'
      + '##################################################\n'
    )
  })
})
