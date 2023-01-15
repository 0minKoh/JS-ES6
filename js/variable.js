if (false) {
  함수();
  var 함수 = function() {
    console.log(안녕);
    let 안녕 = 'Hello!';
  } // error
}

if (false) {
  함수();
  var 함수 = function() {
    console.log(안녕);
    var 안녕 = 'Hello!';
  } // error: 함수()는 함수가 아닙니다.
} 

if (false) {
  let a = 1;
  var 함수 = function() {
    a = 2;
  }
  console.log(a1); //1
}

if (false) {
  let a = 1;
  var b = 2;
  window.a = 3;
  window.b = 4;

  console.log(a + b); //7
}

if (false) {
  let a = 1
  var func = () => {
    if (a == 1) {
      console.log(a)
    }
  }
  
  func()
}

if (false) {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {console.log(i)}, i*1000)
    // setTimeout(() => {console.log(i)}, i*1000 ); 
  }
}