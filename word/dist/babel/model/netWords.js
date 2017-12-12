"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _localStorageUtil = require("../libs/localStorageUtil");

var _localStorageUtil2 = _interopRequireDefault(_localStorageUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NetWords = function () {
	function NetWords() {
		_classCallCheck(this, NetWords);
	}

	_createClass(NetWords, null, [{
		key: "isAdded",
		value: function isAdded(url) {
			return _localStorageUtil2.default.isExist(url);
		}
	}, {
		key: "add",
		value: function add(url, words) {
			_localStorageUtil2.default.setItem(url, words);
		}
	}, {
		key: "get",
		value: function get(url) {
			return _localStorageUtil2.default.getItem(url) || {};
		}
	}]);

	return NetWords;
}();

exports.default = NetWords;