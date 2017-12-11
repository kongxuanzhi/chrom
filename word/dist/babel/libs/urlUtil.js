"use strict";

/**
 * Created by faiyer on 2017/9/23.
 */

var urlUtil = function urlUtil() {};
urlUtil.getDomain = function (url) {
  return url.match(/\/\/(.*?)\//)[1];
};