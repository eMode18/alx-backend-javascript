const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
    it('should return the sum of numbers rounded off', function () {
        expect(calculateNumber('SUM', 2.7, 3.8)).to.equal(7);
    });

    it('should return the difference of numbers rounded off', function () {
        expect(calculateNumber('SUBTRACT', 5.2, 3.1)).to.equal(2);
    });

    it('should return the division of numbers rounded off', function () {
        expect(calculateNumber('DIVIDE', 7.3, 2.5)).to.equal(3);
    });

    it('should return "Error" if rounded b is 0', function () {
        expect(calculateNumber('DIVIDE', 8.6, 0)).to.equal('Error');
    });
});

