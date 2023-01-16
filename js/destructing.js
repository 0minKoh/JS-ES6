if (false) {
  let 신체정보 = {
    body: {
      height: 190,
      weight: 70
    },
    size: ["상의 Large", "바지 30인치"],
  };

  let {body: {height: 키, weight: 몸}, size: [상, 하]} = 신체정보
  console.log(키, 몸, 상, 하)
}