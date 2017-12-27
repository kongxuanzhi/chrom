'use strict';

var _exposeLoader$Jquery = require('expose-loader?$!jquery');

var _exposeLoader$Jquery2 = _interopRequireDefault(_exposeLoader$Jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('../css/reset.css');
require('../template/card/snow.less');
require('../../css/balloon.css');

require('../template/card/snow.html');

(0, _exposeLoader$Jquery2.default)(document).ready(function ($) {
  var flakes = document.getElementsByClassName('flake');
  var snows = [];
  [].forEach.call(flakes, function (flake) {
    var initTop = -(Math.random() * 300);
    var initLeft = Math.random() * document.body.scrollWidth - 10;
    flake.style.top = initTop + 'px';
    flake.style.left = initLeft + 'px';
    var fontSize = ~~(Math.random() * 30) + 10;
    var step = fontSize / 10;
    flake.style.fontSize = fontSize + 'px';
    snows.push({
      top: ~~initTop || 1,
      left: ~~initLeft || 1,
      step: ~~step || 1
    });
  });
  console.log(snows);
  var sh = setInterval(function () {
    [].forEach.call(flakes, function (flake, index) {
      snows[index].top += snows[index].step;
      snows[index].left += 0; //~~ (Math.random() * 2) - 1;
      flake.style.top = snows[index].top + 'px';
      flake.style.left = snows[index].left + 'px';
      if (snows[index].top > document.body.scrollHeight) {
        // clearInterval(sh);
        snows[index].top = -(Math.random() * 300);
      }

      if (snows[index].left > document.body.scrollWidth || snows[index].left < 0) {
        // clearInterval(sh);
        snows[index].top = -(Math.random() * 300);
        snows[index].left = ~~(Math.random() * document.body.scrollWidth - 10);
      }
    });
  }, 50);
});