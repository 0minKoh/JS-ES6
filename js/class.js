if (false) {
  class Dog {
    constructor(type, color) {
      this.type = type
      this.color = color
    }
    get addAge() {
      if (this.age > 0) {
        return (this.age + 1)
      } else {
        return 'error'
      }
    }
  }
  
  var dog1 = new Dog('말티즈', 'white')
  console.log(dog1.addAge)

  class Cat extends Dog {
    constructor(type, color, age) {
      super(type, color);
      this.age = age
    }
  }

  var cat1 = new Cat('코숏', 'white', 5)
  console.log(cat1.addAge)
  // 3번 다시보기
}

if (false) {
  class Unit {
    constructor(attack = 5, health = 100) {
      this.attack = attack
      this.health = health
    }
    get battlePoint() {
      return (this.attack + this.health)
    }
    set heal(h) {
      this.health += h;
    }
  }

  var Character = new Unit(undefined, undefined)
  console.log(Character.battlePoint)
  Character.heal = 5
  console.log(Character.battlePoint)
}