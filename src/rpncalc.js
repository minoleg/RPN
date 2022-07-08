const Stack = require('./stack.js');
const Parser = require('./parser.js');

class RPNCalculator {
    parser = new Parser(' ');

    constructor() {
        // This is intentional
    }

    addOperator(operator) {
        this.parser.addOperator(operator);
    }

    evaluate(expression) {
        this.parser.parse(expression);
        const stack = new Stack();
        let token = this.parser.nextToken();
        while (token != null) {
            token.process(stack);
            token = this.parser.nextToken();
        }

        const res = stack.pop();
        const next = stack.pop();
        if ((res === null) || (next !== null)) {
            throw new Error('Invalid Reverse Polish Expression');
        }
        return res;
    }
}

module.exports = RPNCalculator;
