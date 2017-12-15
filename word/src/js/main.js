
// require('../css/reset.css')
import $ from 'expose-loader?$!jquery'

$(document).ready(function ($) {
  require('../template/card/snow.less')
  require('../../css/balloon.css')


  // var names = ['foo', 'bar', 'baz'];
	// let renderResult = template({
	// 	names: names
	// });
	// console.log(renderResult);
  for (let el of $(require('../template/card/snow.html'))) {
		document.body.appendChild(el)
	}

  let flakes = document.getElementsByClassName('flake');
  let snows = [];
  [].forEach.call(flakes, function (flake) {
    let initTop = - (Math.random() * 300);
    let initLeft = (Math.random() * document.body.scrollWidth - 10);
    flake.style.top = initTop + 'px';
    flake.style.left = initLeft + 'px';
    let fontSize = ~~(Math.random() * 30) + 10;
    let step = fontSize / 10;
    flake.style.fontSize =  fontSize + 'px';
    snows.push({
      top: ~~initTop || 1,
      left: ~~initLeft || 1,
      step: ~~step || 1
    })
  });
  console.log(snows)
  let sh = setInterval(() => {
    [].forEach.call(flakes, function (flake, index) {
      snows[index].top += snows[index].step;
      snows[index].left += 0; //~~ (Math.random() * 2) - 1;
      flake.style.top = snows[index].top + 'px';
      flake.style.left = snows[index].left + 'px';
      if (snows[index].top > document.body.scrollHeight) {
        // clearInterval(sh);
        snows[index].top = - (Math.random() * 300);
      }

      if (snows[index].left > document.body.scrollWidth || snows[index].left < 0) {
        // clearInterval(sh);
        snows[index].top = - (Math.random() * 300);
        snows[index].left = ~~ (Math.random() * document.body.scrollWidth - 10);
      }
    })
  }, 50);
});