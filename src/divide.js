const { Operator } = require('./token.js');

class DivOperator extends Operator {
    constructor() {
        super('/', 2);
    }

    calc(operands) {
        return operands[0] / operands[1]
    }
}

module.exports = DivOperator;
