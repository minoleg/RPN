class Token {
    process(_stack) {
        // This is intentional
    }
}

class Operand extends Token {
    value;

    constructor(value) {
        super();
        this.value = value;
    }

    process(stack) {
        stack.push(this.value);
    }
}

class Operator extends Token {
    symbol;
    numOfOperand;

    constructor(symbol, numOfOperand) {
        super();
        this.symbol = symbol;
        this.numOfOperand = numOfOperand;
    }

    process(stack) {
        if (stack === null) {
            throw new Error('Stack is null');
        }

        const operands = [];
        for(var i = 0; i < this.numOfOperand; i++) {
            const operand = stack.pop();
            if (operand === null) {
                throw new Error('Invalid Reverse Polish Expression');
            }
            operands.unshift(operand);
        }
        stack.push(this.calc(operands));
    }

    calc(_operands) {
        // This is intentional
    }
}

module.exports = { Operand, Operator };
