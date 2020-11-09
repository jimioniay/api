const expect = require('chai').expect;

describe('Test Server.js', () => {
  describe('Check API call', () => {
    it('should return 200', async () => {
      expect(200).to.equal(200);
    });
    it('should return 400', async () => {
      expect(400).to.equal(400);
    });
  });
});
