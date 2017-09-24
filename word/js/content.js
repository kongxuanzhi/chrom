/**
 * Created by faiyer on 2017/9/22.
 */

function sendHtmlText() {
    let htmlText = document.getElementsByTagName("html")[0].innerText;
    sendMessage(updatePopUp, {
    	type: 'parseHtml', 
    	data: {
    		message: htmlText,
    		domain: window.location.host
    	}
	});
}

function checkNetAdded(callback) {
	let check = (response) => {
		if (response) {
			callback()
		}
	}
	sendMessage(check, {
		type: 'isAddedToList',
		data: window.location.host
	});
}

// isAddedToList
function sendMessage(callback, message={}) {
	chrome.runtime.sendMessage(message, function(response) {
		if (callback) {
	    	callback(response);
		}
	});
}

//做一个弹窗
function updatePopUp(ret) {
	for(let key in ret) {
	  console.log(key +":"+ ret[key].count);
	}
}

$(document).ready(function($) {
	checkNetAdded(sendHtmlText)
});