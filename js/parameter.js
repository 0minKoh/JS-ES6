if (false) {
  var param = (...p) => {
    p.forEach((el) => {
      console.log(el)
    })
  }

  param(1,2,3,4,5,6)
}

if (false) {
  var a = [1,2,3];
  var b = '김밥';
  var c = [...b, ...a];
  console.log(c); // ['김','밥', 1, 2, 3]
}

if (false) {
  var a = [1,2,3];
  var b = ['you', 'are'];
  var c = function(a,b){
    console.log( [[...a], ...[...b]][1] ) // [[1, 2, 3], 'you', 'are']
  }
  c(a,b);
}

if (false) {
  function 함수(a = 5, b = a * 2 ){
    console.log(a + b);
    return 10
  }
  함수(3); // a = 3, b = 6
}

if (false) {
  function 함수(a = 5, b = a * 2 ){
    console.log(a + b);
  }
  함수(undefined, undefined);
}

if (false) {
  function 어레이(...p){
    return p
  }
  
  var newArray = 어레이(1,2,3,4,5,6);
  console.log(newArray);
}

if (false) {
  var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];

  var MaxNum = (num) => {
    console.log(Math.max(...num))
  }

  MaxNum(numbers)
}

if (false) {
  function 정렬(str){
    var arr = [...str]
    arr = arr.sort()
    console.log(...arr)
  }
  
  정렬('apple'); 
}

if (false) {

  let count = (str) => {
    let arr = [...str]
    let obj = {}

    arr.forEach((el) => {
      if (obj[el] > 0) {
        obj[el]++
      } else {
        obj[el] = 1
      }
    })
    console.log(obj)
  }

  count('aacbbb')
}