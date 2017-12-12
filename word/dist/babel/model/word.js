'use strict';

function Word(word) {
	this.word = word;
	this.wordJson = localStorageUtil.getItem(word);
}

Word.translate = function (word) {
	return word; //tbd
};

Word.add = function (word) {
	var wordJson = {};
	if (Word.isExist(word) && !Word.known) {
		wordJson = localStorageUtil.getItem(word);
		wordJson.count++;
		localStorageUtil.setItem(word, wordJson);
	} else {
		wordJson = {
			word: word,
			count: 1,
			zh: '',
			known: false
		};
		localStorageUtil.setItem(word, wordJson);
	}
};

Word.isExist = function (word) {
	return localStorageUtil.isExist(word);
};

Word.known = function (word) {
	return localStorageUtil.getItem(word).known;
};

Word.prototype = {

	translate: function translate(zh) {
		if (this.wordJson) {
			this.wordJson.zh = zh;
			localStorageUtil.setItem(this.word, this.wordJson);
		}
	},
	setKnown: function setKnown(known) {
		if (this.wordJson) {
			this.wordJson.known = known;
			localStorageUtil.setItem(this.word, this.wordJson);
		}
	}
};