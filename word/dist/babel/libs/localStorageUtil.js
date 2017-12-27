"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = localStorageUtil;

var _md = require("md5");

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function localStorageUtil() {};

localStorageUtil.getItem = function (key) {
  return JSON.parse(localStorage.getItem((0, _md2.default)(key.toLowerCase()))) || null;
};

localStorageUtil.setItem = function (key, value) {
  localStorage.setItem((0, _md2.default)(key.toLowerCase()), JSON.stringify(value));
};

localStorageUtil.isExist = function (key) {
  return localStorage.hasOwnProperty((0, _md2.default)(key.toLowerCase()));
};

localStorageUtil.removeItem = function (key) {
  return localStorage.removeItem((0, _md2.default)(key.toLowerCase()));
};