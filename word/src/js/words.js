import $ from 'expose-loader?$!jquery'
import template from "ejs-loader!./../template/words/words.ejs"
var json = require('../data/words.json')

if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function() {
        for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
        return this;
    };
}

const getWords = (offset, length) => {
  if (offset + length > json.length) {
    offset = json.length - length;
  }

  return json.slice(offset, offset + length)
}

export default {
  renderResult: (offset, length = 100) => {
    return template({
      words: getWords(offset, length)
    })
  }
}
