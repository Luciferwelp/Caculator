const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
	console.log(tokens)
	console.log(num1,num2, mathSymbol)
	switch(mathSymbol) {
		case '+':
			 result = num1 + num2;
			console.log(`${num1} + ${num2} = ${result}`);
			break;
	
		case '-':
			 result = num1 - num2;
			console.log(`${num1} - ${num2} = ${result}`);
			break;
	
		case '*':
			 result = num1 * num2;
			console.log(`${num1} * ${num2} = ${result}`);
			break;
	
		case '/':
			 result = num1 / num2;
			console.log(`${num1} / ${num2} = ${result}`);
			break;
		
		case 'root':
			result = num1 ^ num2;
			console.log(`${num1} ^ ${num2} = ${result}`);
		default:
			console.log('Invalid operator');
			break;
	}
	reader.close()

});
