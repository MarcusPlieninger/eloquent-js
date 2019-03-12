function nthPositionForLoop(inputList, position) {
  if (inputList === undefined) return undefined
  for (let node = inputList; node; node = node.rest) {
    if (position === 0) return node.value
    if (node === null) return node
    position--
  }
}

// easier way is to convert list to array and then return the index of the array
function nthPostionForLoopEasy(inputList, position) {
  const inputListAsArray = listToArrayForLoop(inputList)
  // indexOf returns -1 if the element is not in the array, hence this conditional statement
  if (position <= inputListAsArray.length && position >= 0) return inputListAsArray[position]
  return undefined
}

function listToArrayForLoop(inputList) {
  const outputArray = []
  for (let node = inputList; node; node = node.rest) {
    outputArray.push(node.value)
  }
  return outputArray
}

describe('nthPostionForLoop()', () => {
  test('3-element list, position in range', () => {
    expect(nthPositionForLoop(
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
      }, 2
    )).toBe(5)
  })
  test('3-element list, position not in range', () => {
    expect(nthPositionForLoop(
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

describe('nthPostionForLoopEasy()', () => {
  test('3-element list, property in list', () => {
    expect(nthPostionForLoopEasy(
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
      }, 2
    )).toBe(5)
  })
  test('3-element list, position not in range', () => {
    expect(nthPostionForLoopEasy(
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
