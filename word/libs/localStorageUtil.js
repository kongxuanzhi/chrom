


function localStorageUtil() {};

localStorageUtil.getItem = (key) => {
   return JSON.parse(localStorage.getItem(hex_md5(key.toLowerCase()))) || null;
}

localStorageUtil.setItem = (key, value) => {
   localStorage.setItem(hex_md5(key.toLowerCase()), JSON.stringify(value))
}

localStorageUtil.isExist = (key) => {
	return localStorage.hasOwnProperty(hex_md5(key.toLowerCase()));
}

localStorageUtil.removeItem = (key) => {
	return localStorage.removeItem(hex_md5(key.toLowerCase()));
}


//    return {
// 		addItem : function(key, value) {
// 			return addItem(key, value)
// 		},
//        getItem : function(key) {
//            return JSON.parse(localStorage.getItem(key))
//        },
// 	    port: 32
// 	}
// }


