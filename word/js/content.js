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
	for(let word in ret) {
		if (!word.known) {
			let obj = document.createElement("div");
			let r = ret[word].count;
			obj.classList.add('circle');
			obj.innerText= word;
			obj.style.color = '#000';
			obj.style.backgroundColor = '#123456';
			obj.style.zIndex = 1 / r * 1000;
			obj.style.top = Math.random()*document.body.offsetHeight + "px";
			obj.style.left = Math.random()*document.body.offsetWidth + "px";
			obj.style.width = obj.style.height = obj.style.lineHeight = 2  + 'px';
			obj.style.fontSize = r + 'px';
			obj.style.borderRadius = 0.5;
			obj.style.opacity = 0;
			// obj.onclick = function(e) {
			// 	this.style.display = "None";
			// }
			obj.onmouseover = function(e) {
			}

			obj.onmousedown = function(ev){
				var ev = ev || event;
				obj.oDivX = ev.clientX - obj.offsetLeft; //
				obj.oDivY = ev.clientY - obj.offsetTop;
				obj.style.left = ev.pageX - obj.offsetWidth/2 + 'px';
				obj.style.top = ev.pageY - obj.offsetHeight/2 + 'px';
				
				obj.parentElement.onmousemove = function(ev){  //注意这里是document
					var ev = ev || event;
					let L = ev.clientX - obj.oDivX;
					let T = ev.clientY - obj.oDivY;
					obj.style.backgroundColor = "black";
					if (L < 10) {
						L = 0;
						word.known = true;
						obj.parentElement.onmousemove = obj.parentElement.onmouseup = null;
						obj.style.opacity = 1;
						// obj.style.width = 20 + 'px';
						// obj.style.height = 20 + 'px';
						obj.style.fontSize = 12 + 'px';
						// obj.style.paddingLeft = "25px";
						obj.style.backgroundColor = "#fff";
					}
					obj.style.left = L + 'px';
					obj.style.top = T + 'px';
				}
		
				obj.parentElement.onmouseup = function(ev){
					//加入兼容问题
					if( obj.releaseCapture) {
						obj.releaseCapture();
					}
					// obj.style.left = ev.pageX - 200 + 'px';
					// obj.style.top = ev.pageY - 200 + 'px';
					obj.style.backgroundColor = "red";
					obj.parentElement.onmousemove = obj.parentElement.onmouseup = null;
				}
			}
			document.body.appendChild(obj)
		}
	}
}

$(document).ready(function($) {
	checkNetAdded(sendHtmlText)
});