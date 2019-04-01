class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(vector) {
    this.x += vector.x
    this.y += vector.y
    return this
  }

  // just to show that destructuring is possible here
  minus({ x, y }) {
    this.x -= x
    this.y -= y
    return this
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

describe('Vec', () => {
  test('examples from text', () => {
    expect(new Vec(1, 2).plus(new Vec(2, 3))).toMatchObject({ x: 3, y: 5 })
    expect(new Vec(1, 2).minus(new Vec(2, 3))).toMatchObject({ x: -1, y: -1 })
    expect((new Vec(3, 4).length)).toBe(5)
  })
})
