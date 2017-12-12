import localStorageUtil from "../libs/localStorageUtil"

export default class NetWords {

	constructor() {
	}

	static isAdded(url: string) {
		return localStorageUtil.isExist(url);
	}

	static add(url: string, words) {
		localStorageUtil.setItem(url, words);
	}

	static get(url: string) {
		return localStorageUtil.getItem(url) || {};
	}
}
