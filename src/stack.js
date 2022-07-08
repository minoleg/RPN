class Stack {
    values = [];
    
    push(value) {
        this.values.push(value);
    }

    pop() {
        if (this.values.length === 0) {
            return null;
        }
        return this.values.pop();
    }
}

module.exports = Stack;
