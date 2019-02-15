function countBs(theString) {
  let counter = 0
  for (let i = 0; i < theString.length; i++) {
    if (theString[i] === 'B') {
      counter++
    }
    return counter
  }
}
