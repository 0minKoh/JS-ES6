if (false) {
  function MakeProduct(name, price) {
    this.name = name
    this.price = price
    this.vat = () => {
      console.log(this.price*0.1)
    }
  }
  var product1 = new MakeProduct('shirt', 50000)
  var product2 = new MakeProduct('pants', 60000)
  product1.vat()
}

if (false) {
  function Student(name, age) {
    this.name = name
    this.age = age
    this.sayHi = function() {
      console.log("안녕 나는 " + this.name + "이야")
    }
  }

  var 학생1 = new Student('Kim', 20)
  console.log(학생1)
}

if (false) {
  var arr = [1,2,3];
  arr.__proto__.remove3 = function() {
    arr.forEach((el, i) => {
      if (el == 3) {
        arr.splice(i)
      }
      return arr
    })
  }

  arr.remove3();

  console.log(arr);
}