if (false) {
  var 프로미스 = new Promise(function(성공, 실패){
    setTimeout(function(){
      성공();
    }, 1000);
  });
  
  프로미스.then(function(){
    console.log('1초 대기 성공했습니다')
  }).catch(function(){
    console.log('실패했습니다')
  });
}

if (false) {
  const img = document.getElementById('test')
  var imgPromise = new Promise((resolve, reject) => {
    img.addEventListener('load', () => {resolve()})
    img.addEventListener('error', () => {reject()})
  })

  imgPromise.then(console.log('성공')).catch('실패')
}
