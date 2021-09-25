import Animal from './animal'

export default class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs)
    this.age = age
  }
}
