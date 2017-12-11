'use strict';

var _other = require('../other');

console.log((0, _other.Add)(1, 33)); /**
                                      * Created by faiyer on 2017/9/22.
                                      */

console.log(window.$);

var listStatue = {
    save: {
        'title': '保存网页链接',
        'onclick': addToList
    },
    delete: {
        'title': '移除网页链接',
        'onclick': delFromList
    }
};

chrome.contextMenus.create({
    'type': 'normal',
    'title': '保存网页链接',
    'id': 'list',
    'onclick': addToList
});

chrome.contextMenus.create({
    'type': 'normal',
    'title': '加入生词本',
    'contexts': ['selection'],
    'id': 'word',
    'onclick': addNewWord
});

//https://developer.chrome.com/extensions/contextMenus#type-OnClickData
function addToList(info, tab) {
    var domain = urlUtil.getDomain(info.pageUrl);
    localStorage.setItem(domain, new Date().toLocaleString());
    chrome.contextMenus.update('list', listStatue.delete);
}

function delFromList(info, tab) {
    localStorage.removeItem(urlUtil.getDomain(info.pageUrl));
    chrome.contextMenus.update('list', listStatue.save);
}

function addNewWord(info, tab) {
    var url = 'http://translate.google.com.hk/#auto/zh-CN/' + info.selectionText;
    window.open(url, '_blank');
}

//一个域名下一个words集合
function parseHtml(data) {
    var wordsMap = {};
    if (NetWords.isAdded(data.domain)) {
        wordsMap = NetWords.get(data.domain);
    }

    var words = pageParse.resolve(data.message);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var word = _step.value;

            var key = word.toLowerCase();
            if (wordsMap.hasOwnProperty(key)) {
                wordsMap[key].count++;
            } else {
                wordsMap[key] = {
                    zh: '翻译',
                    count: 1,
                    known: false
                };
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    NetWords.add(data.domain, wordsMap); //频繁使用的方法，应该使用静态方法，不应该new
    chrome.browserAction.setBadgeText({ text: Object.getOwnPropertyNames(wordsMap).length.toString() });
    return wordsMap;
}

//判断当前网站是否加入到统计名单
function isAddedToList(domain) {
    var isAdded = localStorage.getItem(domain) != null;
    // update context menu
    if (isAdded) {
        chrome.contextMenus.update('list', listStatue.delete);
    } else {
        chrome.contextMenus.update('list', listStatue.save);
        chrome.browserAction.setBadgeText({ text: '' });
    }
    return isAdded;
}

// 监听 content.js 中发来的事件，做出不同的操作
var map = {
    'parseHtml': parseHtml,
    'isAddedToList': isAddedToList

    //这里sender.url本来就可以是前台的url了，不需要再传过来
};chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    var type = message.type || '';
    if (type) {
        var result = map[type](message.data);
        sendResponse(result);
    }
});