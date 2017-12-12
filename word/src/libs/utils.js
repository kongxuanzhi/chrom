var pageParse = function () { };

pageParse.resolve = (content) => {
  return content.match(/[a-z\'\’\-A-Z]{2,}/g) || [];
}

const getDomain = (url) => {
  return url.match(/\/\/(.*?)\//)[1]
}

export {
  pageParse, getDomain
}