# chrom
chrom extension

##ver1
1. 右键，将当前网站加入到统计监听列表
1.1 如果已经加进去了，就显示移除
2. 统计网页上的每个单词个数，排序， 之后扩展可以统计词组
3. 将单词标记为熟识
4. 当前网站有多少个生词和熟悉的词 # maybe
4. 选中网页单词， 标记为熟识或者陌生
5. 对5天内或者累计至今的频繁单词进行大小放大， 遇到过一次，字体就变大一点 to 另一个网页项目（单词背诵）

##ver2
1. 截取陌生单词所在句子， 删除熟识单词所在句子
2. 统计单词量
3. 配置服务器，增加用户量, 将数据从localStorage同步到云端
4. 对客户进行数据分析
5. 增加针对性的单词推荐
6. 更好的单词记忆形式
7. 长难句分析

##ver3
1. 推广产品
2. 创业成功
3. 走上人生巅峰
4. ^&^

key: md5net
value: count

key: md5(word)
value: {
    'word': 'word'
    'count': 3,
    'zh': '单词',
    'know': true,
    '句子': []
    '网站': []
}

//chrome.runtime.sendMessage(window.location.href);
//window.onmouseup = function(){
//    var selection = window.getSelection();
//    if(selection.anchorOffset != selection.extentOffset){
//        chrome.runtime.sendMessage(selection.toString());
//    }
//}
<!-- 
db:
{   
    id: md5net
    addCount: 3
    url: ''
    words:  [
        'word': {
            
        },
        'ok': {
            
        }
    ]
} -->

# link:
1. [正则表达式](http://blog.csdn.net/kongzhixuan/article/details/50239965)
