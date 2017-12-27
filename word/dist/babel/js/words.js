'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _exposeLoader$Jquery = require('expose-loader?$!jquery');

var _exposeLoader$Jquery2 = _interopRequireDefault(_exposeLoader$Jquery);

var _words = require('ejs-loader!./../template/words/words.ejs');

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var json = require('../data/words.json');

if (!Array.prototype.shuffle) {
  Array.prototype.shuffle = function () {
    for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x) {}
    return this;
  };
}

var getWords = function getWords(offset, length) {
  if (offset + length > json.length) {
    offset = json.length - length;
  }

  return json.slice(offset, offset + length);
};

exports.default = {
  renderResult: function renderResult(offset) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    return (0, _words2.default)({
      words: getWords(offset, length)
    });
  }
};