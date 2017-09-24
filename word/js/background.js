/**
 * Created by faiyer on 2017/9/22.
 */
let listStatue = {
    save: {
        'title': '保存网页链接',
         'onclick': addToList
    },
    delete: {
        'title': '移除网页链接',
        'onclick': delFromList
    }
}

chrome.contextMenus.create({
    'type':'normal',
    'title':'保存网页链接',
    'id':'list',
    'onclick': addToList
});

chrome.contextMenus.create({
    'type':'normal',
    'title':'加入生词本',
    'contexts':['selection'],
    'id':'word',
    'onclick': addNewWord
});

//https://developer.chrome.com/extensions/contextMenus#type-OnClickData
function addToList(info, tab){
    let domain = urlUtil.getDomain(info.pageUrl);
    localStorage.setItem(domain, (new Date()).toLocaleString());
    chrome.contextMenus.update('list', listStatue.delete);
}

function delFromList(info, tab){
    localStorage.removeItem(urlUtil.getDomain(info.pageUrl));
    chrome.contextMenus.update('list', listStatue.save);
}

function addNewWord(info, tab){
    var url = 'http://translate.google.com.hk/#auto/zh-CN/'+info.selectionText;
    window.open(url, '_blank');
}

//一个域名下一个words集合
function parseHtml(data) {
    let wordsMap = {};
    if (NetWords.isAdded(data.domain)){
        wordsMap = NetWords.get(data.domain);
    }
    
    let words = pageParse.resolve(data.message);
    for (let word of words) {
        let key = word.toLowerCase();
        if (wordsMap.hasOwnProperty(key)) {
            wordsMap[key].count++;
        } else {
            wordsMap[key] = {
                zh: '翻译',
                count: 1,
                known: true
            }
        }
    }
    NetWords.add(data.domain, wordsMap);  //频繁使用的方法，应该使用静态方法，不应该new
    chrome.browserAction.setBadgeText({text: Object.getOwnPropertyNames(wordsMap).length.toString()});
    return wordsMap;
}

function isAddedToList(domain) {
    let isAdded = localStorage.getItem(domain) != null;
    chrome.contextMenus.update('list', isAdded ? listStatue.delete : listStatue.save);
    if (!isAdded) {
        chrome.browserAction.setBadgeText({text:''});
    }
    return isAdded; 
}

let map = {
    'parseHtml': parseHtml,
    'isAddedToList': isAddedToList
}

//这里sender.url本来就可以是前台的url了，不需要再传过来
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    let type = message.type || '';
    if (message.data) {
        let result = map[type](message.data);
        console.log(result)
        sendResponse(result);
    }
});