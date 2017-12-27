/**
 * Created by faiyer on 2017/9/22.
 */
//这个文件里可以完全操纵当前的网页内容
//import jquery as $ in local area
import $ from 'expose-loader?$!jquery'
// import template1 from 'html-loader?attrs=img:src img:data-src!../template/file.html'
// import template from "ejs-loader!./../template/card/card.ejs"
import ret from './words'

function sendHtmlText() {
	//get entire show content on webpage
	let htmlText = document.getElementsByTagName("html")[0].innerText;
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
	}, (response) => {
		if (response) {
			sendHtmlText()
		}
	});
}

// isAddedToList
function sendMessage(message = {}, callback) {
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
	for (let word in ret) {
		if (!word.known) {
			let obj = document.createElement("div");
			let r = ret[word].count;
			obj.classList.add('circle');
			obj.innerText = word;
			obj.style.color = '#000';
			// obj.style.backgroundColor = '#123456';
			obj.style.zIndex = 1 / r * 1000;
			obj.style.top = Math.random() * document.body.offsetHeight + "px";
			obj.style.left = Math.random() * document.body.offsetWidth + "px";
			// obj.style.width = obj.style.height = obj.style.lineHeight = 10  + 'px';
			obj.style.fontSize = (r + 12) + 'px';
			obj.style.borderRadius = 0.5;
			obj.style.opacity = 1;
			// obj.onclick = function(e) {
			// 	this.style.display = "None";
			// }
			obj.onmouseover = function (e) {
			}

			obj.onmousedown = function (ev) {
				var ev = ev || event;
				obj.oDivX = ev.clientX - obj.offsetLeft; //
				obj.oDivY = ev.clientY - obj.offsetTop;
				obj.style.left = ev.pageX - obj.offsetWidth / 2 + 'px';
				obj.style.top = ev.pageY - obj.offsetHeight / 2 + 'px';

				obj.parentElement.onmousemove = function (ev) {  //注意这里是document
					var ev = ev || event;
					let L = ev.clientX - obj.oDivX;
					let T = ev.clientY - obj.oDivY;
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
				}

				obj.parentElement.onmouseup = function (ev) {
					//加入兼容问题
					if (obj.releaseCapture) {
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

const hash = (str) => {
	let sum = 0;
	[].forEach.call(str, (item, index) => {
		sum += item.charCodeAt()
	})
	return (sum % 70) * 100;
}

var hideList = [];

const removeElem = (id) => {
	let el = document.getElementById(id);
	return el && document.body.removeChild(el);
}


var Offset = -1;
const initDom = (offset, length) => {
	Offset = +offset;
	removeElem('word-slide-wrap')
	for (let el of $(ret.renderResult(Offset, length))) {
		document.body.appendChild(el)
	}
	localStorage.setItem('offset-tom-word', Offset)
	$.fn.fullpage.destroy && $.fn.fullpage.destroy(true);
	$('#word-slide').fullpage({
		autoScrolling: true,
		verticalCentered: true,
		fitToSection: false,
		controlArrows: false,
		easing: 'easeInOutBounce',
		afterRender: doSlide,
		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
			localStorage.setItem('wordIndex', slideIndex + 1)
			$('html, body').css({
				'overflow': 'visible',
				'height': '100%'
			});
		}
	});
	$.fn.fullpage.setAutoScrolling(false);

	// hideList = JSON.parse(localStorage.getItem('knownWords')) || [];
	document.getElementById("word-slide").addEventListener("click", function (e) {
		$(e.target)[0].className === 'fp-tableCell' && $($(e.target).parent()).remove();
		// hideList.push(+$($(e.target)[0].parentNode)[0].dataset.index)
		// localStorage.setItem('knownWords', JSON.stringify(hideList))
	}, true)
}
const doSlide = () => {
	$.fn.fullpage.moveTo(1, +(localStorage.getItem('wordIndex') || 0))
	let rules = [1, 2, 5, 10, 15, 30, 50];
	let ruleIndex = 0;
	let index = +(localStorage.getItem('wordIndex') || 1);
	setInterval(function () {
		let elength = $('#word-slide-wrap .slide').length;
		// do {
		if (elength === 0) {
			initDom(+Offset + 10, 10)
		}
		index += rules[ruleIndex];
		if (index > elength - 1) {
			if (rules[ruleIndex] > elength) {
				ruleIndex = 0;
			}

			index = 0;
			if (Math.random() < 0.3) {
				ruleIndex = (ruleIndex + 1) % rules.length;
			}
		}
		$.fn.fullpage.moveTo(1, index)
		// } while (hideList.indexOf(index) != -1);
	}, 5000);
}

$(document).ready(function ($) {
	// checkNetAdded()
	require('../template/words/words.less')
	require('../../node_modules/fullpage.js/dist/jquery.fullpage.min.css')
	require('../../node_modules/fullpage.js/dist/jquery.fullpage.js')


	$(function () {
		Offset = localStorage.getItem('offset-tom-word') || hash(document.domain);
		const defaultLength = 10;
		initDom(Offset, defaultLength);

		hideList = JSON.parse(localStorage.getItem('knownWords')) || [];
		document.getElementById("word-slide").addEventListener("click", function (e) {
			$(e.target)[0].className === 'fp-tableCell' && $($(e.target).parent()).remove();
			hideList.push(+$($(e.target)[0].parentNode)[0].dataset.index)
			localStorage.setItem('knownWords', JSON.stringify(hideList))
		}, true)
	});
});