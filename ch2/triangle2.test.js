function triangle2(size) {
  //input validation
  if (size < 0 || isNaN(size)) {
    return 'Triangle size must be positive integer.'
  } else if (size === 0) {
    return 'Triangle size cannot be 0.'
  } else if (size % 1 === 0) {
    return 'Triangle size cannot be floating-point.' 
  } else {
  //once input is validated, loop according to input
  let triangle = ''
  for (let line = '#'; line.length < size; line += '#') {
    console.log(line) 
    triangle += line + '\n' 
  }
  return triangle
}

describe('Triangle()', () => {
    test('test input validation', () => {
      expect(triangle2(-230)).toBe('Triangle size must be positive integer.')
      expect(triangle2('Dog')).toBe('Triangle size must be positive integer.')
      expect(triangle2(0)).toBe('Triangle size cannot be 0.')
      expect(triangle2(false)).toBe('Triangle size must be positive integer.')
      expect(triangle2(2.4325).toBe('Triangle size cannot be floating-point.')
    })
    test('small inputs', () => {
      expect(Triangle(3)).toBe('#\n##\n###\n')
      expect(Triangle(5)).toBe('#\n##\n###\n####\n#####')
    })
    test('medium inputs', () => {
      expect(Triangle(10)).toBe(
        '
        #\n
        ##\n
        ###\n
        ####\n
        #####\n
        ######\n
        #######\n
        ########\n
        #########\n')
      expect(Triangle(50)).toBe(
        '
        #\n
        ##\n
        ###\n
        ####\n
        #####\n
        ######\n
        #######\n
        ########\n
        #########\n
        ##########\n
        ###########\n
        ############\n
        #############\n
        ##############\n
        ###############\n
        ################\n
        #################\n
        ##################\n
        ###################\n
        ####################\n
        #####################\n
        ######################\n
        #######################\n
        ########################\n
        #########################\n
        ##########################\n
        ###########################\n
        ############################\n
        #############################\n
        ##############################\n
        ###############################\n
        ################################\n
        #################################\n
        ##################################\n
        ###################################\n
        ####################################\n
        #####################################\n
        ######################################\n
        #######################################\n
        ########################################\n
        #########################################\n
        ##########################################\n
        ###########################################\n
        ############################################\n
        #############################################\n
        ##############################################\n
        ###############################################\n
        ################################################\n
        #################################################\n')
    })
  })