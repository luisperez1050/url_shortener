const shorternerLogic = require('./urlShortenerLogic');

test('shortening a url matching', () => {
  expect(shorternerLogic('https://example.com')).toBe('https://e7c3');
});
test('shortening a url not matching', () => {
  expect(shorternerLogic('https://example11111.com111')).not.toBe('https://e7c3');
});