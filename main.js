function square(x) {
  return x * x;
}
square(10) + 2;
square(100) + square(77);
square(8 / 2);
square(2 + 17);
square(square(15));
"we can have issues with function number one because x is not defined"
"the problem is that we cannot write types in the parametre"
  function square1(x) { 
 return x * x ; 
 } 
 function square2(x){ 
 return x * x ; 
 } 
 function square3(x) { 
 return x * x;
}
//day 2
function oldEnoughToDrive(age) {
	if (age >= 16){
		return true;
	};
	return false;
}
function sameLength(word1, word2) {
	var word1 = word1.length;
	var word2 = word2.length;
	if (word1 === word2) {
		return true;
	};
	return false;
}
function passwordLongEnough(password) {
	var password = password.length ;
	if (password >= 10) {
		return true;
	};
	return false;

}



function rentalCar(name, age, day) {
	if (age >= 21 && name !== 'Joe'){
		return " have fun driving " + name ;
	} 
	
	else if (age >= 18 && name !== 'Joe' && day === "Monday" || day === "tuesday") {
		return " have fun driving";
	}
	else {
		return " you cannot have the keys" + " " + name

		}
   
    
};




function max(number1,number2) {
	if (number1 > number2) {
		return number1;
	}
	else if (number2 > number1) {
		return number2 ;
	}
	else {
		return " they are equal";
	}
};
 function min(n1, n2) {
 	if (n1 < n2) {
 		return n1;
 	}
 	else if (n1 > n2) {
 		return  n2;
 	}
 	else {
 		return "they are equal";
 	}
 } 
function larger(word1, word2) {
	
	if (word1.length > word2.length) {
		return word1;
	}
	else if (word1.length < word2.length) {
		return word2;
	}
	else {
		return "they are equal";
	}
}



function smaller(word1, word2) {
	if (word1.length > word2.length){
		return word2;
	}
	else if (word1.length < word2.length){
		return word1;
	}
    else {
		return "they are the same";
	}
}

function fullName(firstname, lastname) {
	return firstname + ' ' + lastname;
}
function weather (c){
	if(c>26){
		return"it's worm today";
	}
	else {
		return "it's cold today";
	}

}


var x = 7;
//variables
function conter(){
    x = x + 1;
	return x;  
}

function whatToDoOutside(temperature, conditon) {
	if (temperature < 26 && conditon === "sunny") {
		return "running";
	}
	else if (temperature >= 26 && conditon === "windy") {
		return "sufring";
	}
	else {
		return "Netflix and Chil ";
	}
}
function guessMyNumber(n) {
	var x = Math.floor(Math.random() * 6);
	if ( n === x) {
		return ' you win';
	}
	else if (n > 5 || n < 0) {
		return n + ' is out of range'; 
	}
	else {
		return 'you loose your play'
	}
}

function scoreToGrade(score) {
	if (score < 0 || score > 100) {
		return "INVALID SCORE";
}
    else if (score >= 90){
    	return letterGrade("A", score);
    }
    else if (score >= 80){
    	return 'B';
    }
    else if (score >= 70){
    	return 'C';
    }
    else {
    	return 'D';
    }
}
 
function letterGrade(letter, score){
	if (score % 10 >= 5) {
		return letter + '+';
	}
	return letter + '-';
} 

function myFunct (number) {
	if (number > 0){
		return 'this number';
	}
	else if (number < 0){
		return 'this is a';
	}
	else{
		return 'please';
	}
}
function morganRules(a, b){
	if(!(a && b)){
		return true;
	}
	else {
		return false;
	}
}






// get the grade A or b or c 
// we get the grade from the parameter

// letter to grade just takes the score and adds + or - to the letter






















