const RPNCalculator = require('./src/rpncalc.js');
const AddOperator = require('./src/add.js');
const SubOperator = require('./src/subtract.js');
const MulOperator = require('./src/multiply.js');
const DivOperator = require('./src/divide.js');

const calc = new RPNCalculator();
calc.addOperator(new AddOperator());
calc.addOperator(new SubOperator());
calc.addOperator(new MulOperator());
calc.addOperator(new DivOperator());

console.log(calc.evaluate(process.argv[2]));
