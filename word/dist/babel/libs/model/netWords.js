"use strict";

function NetWords() {}

NetWords.isAdded = function (url) {
	return localStorageUtil.isExist(url);
};

NetWords.add = function (url, words) {
	localStorageUtil.setItem(url, words);
};

NetWords.get = function (url) {
	return localStorageUtil.getItem(url) || {};
};