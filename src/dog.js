class Dog {
  constructor(name) {
    this.name = name
  }
  bark() {
    return `Bark Bark I am ${this.name}`
  }
}

module.exports = Dog
