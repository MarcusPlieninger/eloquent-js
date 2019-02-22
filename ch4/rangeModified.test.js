function rangeModified(start, end, step = 1) {
  const rangeArray = []
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      rangeArray.push(i)
    }
  } else if (start > end) {
    for (let i = start; i >= end; i += step) {
      rangeArray.push(i)
    }
  }
  return rangeArray
}
