import md5 from "md5"

export default function localStorageUtil() {};

localStorageUtil.getItem = (key) => {
   return JSON.parse(localStorage.getItem(md5(key.toLowerCase()))) || null;
}

localStorageUtil.setItem = (key, value) => {
   localStorage.setItem(md5(key.toLowerCase()), JSON.stringify(value))
}

localStorageUtil.isExist = (key) => {
	return localStorage.hasOwnProperty(md5(key.toLowerCase()));
}

localStorageUtil.removeItem = (key) => {
	return localStorage.removeItem(md5(key.toLowerCase()));
}