const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
    it('Ought to return the sum of two numbers rounded off', function () {
        assert.strictEqual(calculateNumber(2, 3), 5);
        assert.strictEqual(calculateNumber(1, 3.8), 5);
        assert.strictEqual(calculateNumber(1.1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
