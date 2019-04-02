class Group {
  constructor() {
       
  }

  add() {

  }

  delete() {

  }

  has() {

  }

  static from() {

  }

}

describe('Group', () => {
  test('examples from text', () => {
    const group = Group.from([10, 20])
    expect(group.has(10)).toBe(true)
    expect(group.has(30)).toBe(false)
    expect(group.add(10)).toEqual([10, 20])
    expect(group.delete(10)).toEqual([20])
    expect(group.has(10)).toBe(false)
  })
})
