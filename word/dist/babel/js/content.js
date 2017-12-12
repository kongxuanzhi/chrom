'use strict';

var _exposeLoader$Jquery = require('expose-loader?$!jquery');

var _exposeLoader$Jquery2 = _interopRequireDefault(_exposeLoader$Jquery);

var _file = require('html-loader!../template/file.html');

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by faiyer on 2017/9/22.
 */
//这个文件里可以完全操纵当前的网页内容
//import jquery as $ in local area
console.log(_file2.default);
// import template1 from 'html-loader!../template/file'


function sendHtmlText() {
	//get entire show content on webpage
	var htmlText = document.getElementsByTagName("html")[0].innerText;
	//将内容在后台格式化处理后放入localstorage中，再返回前台展示
	//处理内容包括：
	//1. 过滤掉认识的单词
	//2. 给不认识的单词在出现频率上增加
	//3. 借助第三方工具，对陌生单词进行翻译
	//做一些统计相关的工作
	sendMessage({
		type: 'parseHtml',
		data: {
			message: htmlText,
			domain: window.location.host
		}
	}, updatePopUp);
}

function checkNetAdded() {
	sendMessage({
		type: 'isAddedToList',
		data: window.location.host
	}, function (response) {
		if (response) {
			sendHtmlText();
		}
	});
}

// isAddedToList
function sendMessage() {
	var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var callback = arguments[1];

	chrome.runtime.sendMessage(message, function (response) {
		if (callback) {
			callback(response);
		}
	});
}

// showWordCard()


//应该有多种展现方式，以接口的形式呈现
//将元素的拖动效果，写成组件
function updatePopUp(ret) {
	var _loop = function _loop(word) {
		if (!word.known) {
			var obj = document.createElement("div");
			var r = ret[word].count;
			obj.classList.add('circle');
			obj.innerText = word;
			obj.style.color = '#000';
			// obj.style.backgroundColor = '#123456';
			obj.style.zIndex = 1 / r * 1000;
			obj.style.top = Math.random() * document.body.offsetHeight + "px";
			obj.style.left = Math.random() * document.body.offsetWidth + "px";
			// obj.style.width = obj.style.height = obj.style.lineHeight = 10  + 'px';
			obj.style.fontSize = r + 12 + 'px';
			obj.style.borderRadius = 0.5;
			obj.style.opacity = 1;
			// obj.onclick = function(e) {
			// 	this.style.display = "None";
			// }
			obj.onmouseover = function (e) {};

			obj.onmousedown = function (ev) {
				var ev = ev || event;
				obj.oDivX = ev.clientX - obj.offsetLeft; //
				obj.oDivY = ev.clientY - obj.offsetTop;
				obj.style.left = ev.pageX - obj.offsetWidth / 2 + 'px';
				obj.style.top = ev.pageY - obj.offsetHeight / 2 + 'px';

				obj.parentElement.onmousemove = function (ev) {
					//注意这里是document
					var ev = ev || event;
					var L = ev.clientX - obj.oDivX;
					var T = ev.clientY - obj.oDivY;
					obj.style.backgroundColor = "black";
					if (L < 10) {
						L = 0;
						word.known = true; //回调函数
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
				};

				obj.parentElement.onmouseup = function (ev) {
					//加入兼容问题
					if (obj.releaseCapture) {
						obj.releaseCapture();
					}
					// obj.style.left = ev.pageX - 200 + 'px';
					// obj.style.top = ev.pageY - 200 + 'px';
					obj.style.backgroundColor = "red";
					obj.parentElement.onmousemove = obj.parentElement.onmouseup = null;
				};
			};
			document.body.appendChild(obj);
		}
	};

	for (var word in ret) {
		_loop(word);
	}
}

(0, _exposeLoader$Jquery2.default)(document).ready(function ($) {
	checkNetAdded();
	// document.body.appendChild(template1)
});