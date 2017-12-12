# chrom
chrom extension

#todo：
CSS中的margin属性，与clientWidth、offsetWidth、clientHeight、offsetHeight均无关)
1. DOM元素尺寸
    * offsetHeight: border+padding+height(元素高度) 元素的实际的高度 (offsetWidth)
    * clientHeight: padding+height(元素高度)-滚动条(如果有滚动条)（clientWidth）
    * scrollHeight: padding+包含内容的完全高度
    * scrollTop: 包含内容的完全高度-height-滚动条
    * offsetLeft: 元素加上border距离父类元素的距离
1.2. 屏幕上一点的属性
    * PageY: 鼠标点距离实际页面的左上角的高度（包括scrollTop） 以页面为参考点,不随滑动条移动而变化 = clientY+scrollTop-clientTop absolute
    * clintY: 相对于浏览器本身页面的左上角的高度，（client 客户端） 以浏览器滑动条此刻的滑动到的位置为参考点,随滑动条移动 而变化. fixed
    * screenX: 电脑桌面的距离
    * layerX: （border）鼠标相比较于当前坐标系的位置,即如果触发元素没有设置绝对定位或相对定位,以页面为参考点,如果有,将改变参考坐标系,从触发元素盒子模型的border区域的左上角为参考点
    * offsetX: (内容)IE特有,鼠标相比较于触发事件的元素的位置 以元素盒子模型的内容区域的左上角为参考点
    offsetX: 是鼠标事件相对于目标元素的位置
    layerX：是鼠标相对于目标元素最近（包括自己）的具有absolute/relative的定位元素的位置
2. bezir曲线

##ver1
1. 右键，将当前网站加入到统计监听列表
1.1 如果已经加进去了，就显示移除
2. 统计网页上的每个单词个数，排序， 之后扩展可以统计词组
2.1 引入charts，来统计每页单词出现的个数  tbd https://www.highcharts.com/demo
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
2. [Sample Extensions](https://developer.chrome.com/extensions/samples)
4. [Overview](https://developer.chrome.com/extensions/overview)
3. [Getting Started: Building a Chrome Extension](https://developer.chrome.com/extensions/getstarted)
4. [babel-preset-env：你需要的唯一Babel插件](https://segmentfault.com/p/1210000008466178)
5. [expose-loader 暴露jquery](https://webpack.js.org/loaders/expose-loader/)
6. [Webpack引入jquery及其插件的几种方法](http://blog.csdn.net/yiifaa/article/details/51916560)
7. [webpack 简易配置入门教程](https://segmentfault.com/a/1190000010844612#articleHeader0)
8. [阮一峰Es6语法知识点总结](http://es6.ruanyifeng.com/#README)

Q&A
1. [es6通过babel转码之后，还需要使用webpack才可以使用import关键字吗](https://www.2cto.com/kf/201612/573994.html)
2. [Vue运行之后一片空白，错误 (0 , _router2.default) is not a function](https://segmentfault.com/q/1010000007892556)