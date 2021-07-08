function deleteItem(url) {
    urls = ['https://example.com', 'https://www.bing.com']
    urls.splice(urls.indexOf(url),1)
    return urls
}

module.exports = deleteItem;