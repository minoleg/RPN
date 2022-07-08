const test = require('node:test');
const assert = require('node:assert');

const RPNCalculator = require('../src/rpncalc.js');
const AddOperator = require('../src/add.js');
const SubOperator = require('../src/subtract.js');
const MulOperator = require('../src/multiply.js');
const DivOperator = require('../src/divide.js');

const calc = new RPNCalculator();
calc.addOperator(new AddOperator());
calc.addOperator(new SubOperator());
calc.addOperator(new MulOperator());
calc.addOperator(new DivOperator());

test('null expression test', () => {
    assert.throws(() => calc.evaluate(null));
});

test('empty expression test', () => {
    assert.throws(() => calc.evaluate(''));
});

test('one value test', () => {
    const res = calc.evaluate('4');
    assert.strictEqual(res, 4);
});

test('addition test', () => {
    const res = calc.evaluate('3 2 +');
    assert.strictEqual(res, 5);
});

test('subtraction test', () => {
    const res = calc.evaluate('3 2 -');
    assert.strictEqual(res, 1);
});

test('multiplication test', () => {
    const res = calc.evaluate('3 2 *');
    assert.strictEqual(res, 6);
});

test('division test', () => {
    const res = calc.evaluate('3 2 /');
    assert.strictEqual(res, 1.5);
});

test('all operations test', () => {
    const res = calc.evaluate('6 5 4 3 2 + - * /');
    assert.strictEqual(res, -1.2);
});

test('missing operand test', () => {
    assert.throws(() => calc.evaluate('6 5 4 3 + - * /'));
});

test('missing operator test', () => {
    assert.throws(() => calc.evaluate('6 5 4 3 2 + - *'));
});
