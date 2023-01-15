if (false) {
  var pants = 20;
  var socks = 100;

  let change = (string, v1, v2) => {
    console.log(string[1] + v2 + ' ' + string[0] + v1)
  }

  change`바지${pants} 양말${socks}`;
}

if (false) {
  var pants = 0;
  var socks = 100;

  let showState = (string, v1, v2) => {
    if (v1 == 0) {
      v1 = '다팔렸어요'
    } if (v2 == 0) {
      v2 = '다팔렸어요'
    }
    console.log(string[0] + v1 + string[1] + v2)
  }

  showState`바지${pants} 양말${socks}`;
}