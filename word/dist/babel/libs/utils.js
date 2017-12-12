"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pageParse = function pageParse() {};

pageParse.resolve = function (content) {
  return content.match(/[a-z\'\’\-A-Z]{2,}/g) || [];
};

var getDomain = function getDomain(url) {
  return url.match(/\/\/(.*?)\//)[1];
};

exports.pageParse = pageParse;
exports.getDomain = getDomain;