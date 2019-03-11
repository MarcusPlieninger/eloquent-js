function nthPositionForLoop(inputList, position) {
  if inputList.value === undefined return undefined 
  for (let node = inputList; node; node = node.rest) {
    if (postion === 0) return position
    if (node === null) return node
    position--
  }
}

// easier way is to convert list to array and then use indexOf method to find the element
function nthElementForLoopEasy(inputList, element) {
  const position = listToArrayForLoop(inputList).indexOf(element)
  // indexOf returns -1 if the element is not in the array, hence this conditional statement
  if (position === -1) return undefined
  return position
}

function listToArrayForLoop(inputList) {
  const outputArray = []
  for (let node = inputList; node; node = node.rest) {
    outputArray.push(node.value)
  }
  return outputArray
}

describe('nthElementForLoop()', () => {
  test('3-element list, property in list', () => {
    expect(nthElementForLoop(
      {
        value : 1,
        rest  :
         {
           value : 3,
           rest  :
           {
             value : 5,
             rest  : null
           }
         }
      }, 5
    )).toBe(2)
  })
  test('3-element list, property not in list', () => {
    expect(nthElementForLoop(
      {
        value : 1,
        rest  :
         {
           value : 3,
           rest  :
           {
             value : 5,
             rest  : null
           }
         }
      }, 7
    )).toBe(undefined)
  })
})

describe('nthElementForLoopEasy()', () => {
  test('3-element list, property in list', () => {
    expect(nthElementForLoopEasy(
      {
        value : 1,
        rest  :
         {
           value : 3,
           rest  :
           {
             value : 5,
             rest  : null
           }
         }
      }, 5
    )).toBe(2)
  })
  test('3-element list, property not in list', () => {
    expect(nthElementForLoopEasy(
      {
        value : 1,
        rest  :
         {
           value : 3,
           rest  :
           {
             value : 5,
             rest  : null
           }
         }
      }, 7
    )).toBe(undefined)
  })
})
