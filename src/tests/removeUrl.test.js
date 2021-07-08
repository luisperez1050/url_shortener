const deleteItem = require('./removeUrl');

test('removing a url from the list', () => {
  urlArray = ['https://www.bing.com'];
  expect(deleteItem('https://example.com')).toEqual(expect.arrayContaining(urlArray));
});