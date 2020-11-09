const expect = require('chai').expect;
const math = require('../math');

const ARG_1 = 1;
const ARG_2 = 1;

describe('math.js tests', () => {
  describe('math.add() Test', () => {
    it('should equal 2', () => {
      const result = math.add(1, 1);
      expect(result).to.equal(2);
    });
    it('should equal 4', () => {
      const result = math.add(2, 2);
      expect(result).to.equal(4);
    });
    it('should return value greater than argument 1', () => {
      const result = math.add(ARG_1, ARG_1);
      expect(result).to.above(ARG_1);
    });
  });

  describe('math.multiply() Test', () => {
    it('should equal 3', () => {
      const result = math.multiply(3, 1);
      expect(result).to.equal(3);
    });
    it('should equal 10', () => {
      const result = math.multiply(5, 2);
      expect(result).to.equal(10);
    });
  });
});
