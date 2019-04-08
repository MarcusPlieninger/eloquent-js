class Group {
  constructor() {
    this.members = []
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value)
    }
  }

  delete(value) {
    this.members = this.members.filter(item => item !== value)
  }

  has(value) {
    return this.members.includes(value)
  }

  static from(collection) {
    const group = new Group()
    for (const value of collection) {
      group.add(value)
    }
    return group
  }
}

describe('Group', () => {
  test('examples from text', () => {
    const group = Group.from([10, 20])
    expect(group.has(10)).toBe(true)
    expect(group.has(30)).toBe(false)
    group.add(10)
    expect(group.members).toEqual([10, 20])
    group.delete(10)
    expect(group.members).toEqual([20])
    expect(group.has(10)).toBe(false)
  })
})
