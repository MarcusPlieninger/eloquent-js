function triangle2(size) {
  // input validation

  if (!size) return 'Triangle size most be a positive integer.'
  if (isNaN(size)) return 'C\'mon, man, just enter a number.'
  if (size % 1 !== 0) return 'Triangle size cannot be floating point.'
  if (size === 0) return 'Triangle size cannot be 0.'
  if (size < 0) return 'Triangle size must be a postiive integer.'

  if (size < 0) {
    return 'Triangle size must be positive integer.'
  } if (!(Number.isNaN(size))) {
    return 'C\'mon, man, just enter a number.'
  } if (size === 0) {
    return 'Triangle size cannot be 0.'
  } if (size % 1 !== 0) {
    return 'Triangle size cannot be floating-point.'
  }
  // once input is validated, loop according to input
  let triangle = ''
  for (let line = '#'; line.length < size; line += '#') {
    console.log(line)
    triangle += `${line}\n`
  }
  return triangle
}

describe('triangle2()', () => {
  test('if input is not a positive integer', () => {
    expect(triangle2(-230)).toBe('Triangle size must be a positive integer.')
    expect(triangle2('Dog')).toBe('C\'mon, man, just enter a number.')
    expect(triangle2(0)).toBe('Triangle size cannot be 0.')
    expect(triangle2(false)).toBe('Triangle size must be a positive integer.')
    expect(triangle2(2.4325)).toBe('Triangle size cannot be floating point.')
  })

  test('small inputs', () => {
    expect(triangle2(3)).toBe('#\n##\n###\n')
    expect(triangle2(5)).toBe('#\n##\n###\n####\n#####\n')
  })
  test('medium inputs', () => {
    expect(triangle2(10)).toBe(
      '#\n'
      + '##\n'
      + '###\n'
      + '####\n'
      + '#####\n'
      + '######\n'
      + '#######\n'
      + '########\n'
      + '#########\n'
    )
    expect(triangle2(50)).toBe(
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
    )
  })
})
