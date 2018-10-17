var input = prompt("input a word to see if it follows the \'I before E except after C rule\'").toLowerCase();
var output = "The word you have chosen follows the \'I before E except after C rule\'";

for(var i = 0; i < input.length; i ++){
	if(input[i] === "c"){
		if(input[i + 1] === 'i' && input[i + 2] === 'e'){
			output = "This word is an exception to the rule";
		}
	}
	if(input[i + 1] === 'e' && input[i + 2] === 'i'){
			output = "This word is an exception to the rule";		
	}
}

console.log(output);