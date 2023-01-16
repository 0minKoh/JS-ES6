if (true) {
  let btn = document.getElementById('promiseBtn')

  async function asyncBtn() {
    var promiseBtn = new Promise((resolve, reject) => {
      btn.addEventListener('click', () => {
        reject('실패')
      })
    })

    try { 
      var successMsg = await promiseBtn
      console.log(successMsg) 
    } catch {
      var failMsg = await promiseBtn
      console.log(failMsg)
    }
  }
  asyncBtn()
}