const { Operand } = require('./token.js');

class Parser {
    delimiter;
    parts;
    index;
    operators = new Map();

    constructor(delimiter) {
        this.delimiter = delimiter;
    }

    addOperator(operator) {
        this.operators[operator.symbol] = operator;
    }

    parse(expression) {
        if (expression === null || expression.length === 0) {
            throw new Error('Invalid Reverse Polish Expression');
        }

        this.parts = expression.split(this.delimiter);
        this.index = 0;
    }

    nextToken() {
        if (this.index === this.parts.length) {
            return null;
        }

        const part = this.parts[this.index++];
        const operator = this.operators[part];
        if (typeof operator === 'undefined') {
            const number = Number.parseFloat(part);
            if (Number.isNaN(number)) {
                throw new Error('Invalid Reverse Polish Token Found: ' + t);
            }
            return new Operand(number);
        } else {
            return operator;
        }
    }

}

module.exports = Parser;
