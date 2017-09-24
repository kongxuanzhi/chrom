/**
 * Created by faiyer on 2017/9/23.
 */

let urlUtil = function() {};
urlUtil.getDomain = (url) => {
    return url.match(/\/\/(.*?)\//)[1]
}