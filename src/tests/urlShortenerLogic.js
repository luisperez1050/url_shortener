function shorternerLogic(inputUrl) {
    let urlHolder
    let shortenerArray = new Array()
    let shortenerBuilder

    if (inputUrl.includes('https://') || inputUrl.includes('http://')) {
        urlHolder = new URL(inputUrl)
    } else {
        urlHolder = new URL('https://' + inputUrl)
    }

    shortenerArray = urlHolder.host.split('.')
    shortenerBuilder = urlHolder.protocol + '//'

    shortenerArray.forEach(item => {
        shortenerBuilder += item[0] + item.length
    });

    return shortenerBuilder
  }

  module.exports = shorternerLogic;