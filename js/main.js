var 사람 = {
  name: '손흥민',
  sayHi: function() {
    console.log('1. 안녕 나는 ' + this.name)
  }
}

사람.sayHi(); //안녕 나는 손흥민

var 자료 = { 
  data : [1,2,3,4,5] 
}

var sum = 0
자료.전부더하기 = function () {
  this.data.forEach((data) => {
    sum += data
  })
  console.log(sum)
}

자료.전부더하기()

document.getElementById('버튼').addEventListener('click', function(){
  setTimeout(() => {console.log(this.innerHTML)}, 1000)
});

