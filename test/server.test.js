const expect = require('chai').expect;

describe('Test Server.js', () => {
  describe('Check API call', () => {
    it('should return 200', async () => {
      const api = await fetch('http:localhost:4002');
      expect(api.headers).to.equal(200);
    });
  });
});
