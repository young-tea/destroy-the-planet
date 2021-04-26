var clicks = 0;
var planetClicks = 0;
var planets = 0;
var hp = 15;
var dpc = 1;


function dpc() {

	

}

function hpBar() {

	var currentHp = hp - planetClicks;

	document.getElementById("hpLabel").innerHTML = "Planet HP : " + currentHp;

	document.getElementById("hp").setAttribute("max", Number(hp));

	document.getElementById("hp").setAttribute("value", Number(currentHp));

}

function clickCounter() {
	
	clicks++;

	document.getElementById('clicks').innerHTML = "Clicks: " + clicks;

	if (clicks == 1000) {

		dpc = dpc * 2
	

		if (clicks == 5000) {

			dpc = dpc * 2

			if (clicks == 10000) {

				dpc = dpc * 2

				if (clicks == 50000) {

					dpc = dpc * 2
				}

			}
		}
	}

	document.getElementById('dpc').innerHTML = "DPC : " + dpc;
	
}

function planetClick() {
	
	planetClicks += 1 * dpc;

	if (planetClicks > hp) {
		planetDestroy();
	}
	
}

function planetDestroy() {

	planets++;

	planetClicks = 0;

	document.getElementById('planets').innerHTML = "Planets destroyed: " + planets;

	document.getElementById('destroy').innerHTML = "You destroyed the planet!";

	setTimeout(() => destroyMin(), 2000)

	hp = hp * 2;	
}





function destroyMin() {
	document.getElementById('destroy').innerHTML = "          ";
}


















































/* sending info */

//document.write("text"); to write something on the document

//console.log("text"); to write something on the console

//console.info("text"); to write something on the console

//console.error("text"); to send error to the console

//console.warn("text"); to send warning to the console



/* variables and constants */

//var <variablename>     to create variable

//const <constantname>   to create constant (variable but we cant set other things in itz)

// can be sended to console log or writed on the page like a normal text

// varname <math action>= 7     to do some math vit varriable quiqk

//varname++     to add 1 to the var

//varname = Number("15")   to transform str to int





/* Maths */

//Math.E               returns Euler's number
//Math.PI              returns PI
//Math.SQRT2           returns the square root of 2
//Math.SQRT1_2         returns the square root of 1/2
//Math.LN2             returns the natural logarithm of 2
//Math.LN10            returns the natural logarithm of 10
//Math.LOG2E           returns base 2 logarithm of E
//Math.LOG10E          returns base 10 logarithm of E
//Math.round(4.9);     returns 5
//Math.ceil(4.9);      returns 5
//Math.floor(4.9);     returns 4
//Math.trunc(4.9);     returns 4
//Math.sign(-4);       returns -1
//Math.sign(0);        returns 0
//Math.sign(4);        returns 1
//Math.sqrt(64);       returns 8
//Math.abs(-4.7);      returns 4.7
//Math.min(0, 150, 30, 20, -8, -200);   returns -200
//Math.max(0, 150, 30, 20, -8, -200);   returns 150
//Math.random();      returns a random number


/* if else */

// || is or
// && is and



/* switch */

/*
swich(<what we want to check>) {
	case "<something>": 
		<what we want to do if its right>
		break

	default:
		<action>
}



break is important

default is like else
 */



/* Arrays */

//creating te array

// var <name> = new Array(1thing, 2thing...)

// var <name> = [1thing, 2thing...]

// var <name> = [[shd], [shd2]]

//name.reverse() - reverses the array (1st thongt will be last)

//name.concat(something or array name) - doing 1 arr of 2 or adds something to the end of the array

//name.slice(position(from end or from start)) - deletes choosen elements from array

//name.push(something) - adds element to the end of array

//name.unshift(something) - adds element to the start of array

//name.pop() - deletes the last element from array

//name.shift() - deletes first element from array

//name.join(something) - sets choosen symbol after all thing on array (first set ,)

//name.sort() - sorts the array on abc

//name.lenghts - displays array lenghts



/* loops */


//for

/*
for(var; statement; whattodowithvar) {
	other code
}
*/

//while

/*

while (condition) {
	action
}

*/

// do while is same thing but first doing a action and after it checking

// loop operators

// break   - fully exit loop  how to use:

/* 

for (conditions) {
	if(condition) {
	break;
	}

	other code
}

*/


// continue   - can dont do a piece of code if condition is true    how to use:                            propuskaet kusok koda

/* 

for (conditions) {
	if(condition) {
	continue;
	}

	other code
}

*/






/* How to write all pieces of array with for loop

var tea = [5, 4, 7, 6, "wow"];

var i = 0;

for(i, i < tea.lenght, i++) {
	console.log("Element" + i +":" + tea[i]);
}

*/



// alert("text");     - alert window

// confirmation("text");     - confirmation window

// prompt("text");           - window with input




//funcs

// function <funcname>(<parameterinput>){
//                              to create function
//}
//if there is parameter input, so when u use it you must do          functionname(<paramerterOrVar>)
// can contain couple parameter inputs




// events
// add onClick to the thing and write the func name to craete "event tracker"

//most important attributes

//onchange	       An HTML element has been changed
//onclick	       The user clicks an HTML element
//ondbclick	       The user clicks an HTML element tvise
//onmouseover	   The user moves the mouse over an HTML element
//onmouseout	   The user moves the mouse away from an HTML element
//onkeydown	       The user pushes a keyboard key
//onload	       The browser has finished loading the page


















































/* sending info */

//document.write("text"); to write something on the document

//console.log("text"); to write something on the console

//console.info("text"); to write something on the console

//console.error("text"); to send error to the console

//console.warn("text"); to send warning to the console



/* variables and constants */

//var <variablename>     to create variable

//const <constantname>   to create constant (variable but we cant set other things in itz)

// can be sended to console log or writed on the page like a normal text

// varname <math action>= 7     to do some math vit varriable quiqk

//varname++     to add 1 to the var

//varname = Number("15")   to transform str to int





/* Maths */

//Math.E               returns Euler's number
//Math.PI              returns PI
//Math.SQRT2           returns the square root of 2
//Math.SQRT1_2         returns the square root of 1/2
//Math.LN2             returns the natural logarithm of 2
//Math.LN10            returns the natural logarithm of 10
//Math.LOG2E           returns base 2 logarithm of E
//Math.LOG10E          returns base 10 logarithm of E
//Math.round(4.9);     returns 5
//Math.ceil(4.9);      returns 5
//Math.floor(4.9);     returns 4
//Math.trunc(4.9);     returns 4
//Math.sign(-4);       returns -1
//Math.sign(0);        returns 0
//Math.sign(4);        returns 1
//Math.sqrt(64);       returns 8
//Math.abs(-4.7);      returns 4.7
//Math.min(0, 150, 30, 20, -8, -200);   returns -200
//Math.max(0, 150, 30, 20, -8, -200);   returns 150
//Math.random();      returns a random number


/* if else */

// || is or
// && is and



/* switch */

/*
swich(<what we want to check>) {
	case "<something>": 
		<what we want to do if its right>
		break

	default:
		<action>
}



break is important

default is like else
 */



/* Arrays */

//creating te array

// var <name> = new Array(1thing, 2thing...)

// var <name> = [1thing, 2thing...]

// var <name> = [[shd], [shd2]]

//name.reverse() - reverses the array (1st thongt will be last)

//name.concat(something or array name) - doing 1 arr of 2 or adds something to the end of the array

//name.slice(position(from end or from start)) - deletes choosen elements from array

//name.push(something) - adds element to the end of array

//name.unshift(something) - adds element to the start of array

//name.pop() - deletes the last element from array

//name.shift() - deletes first element from array

//name.join(something) - sets choosen symbol after all thing on array (first set ,)

//name.sort() - sorts the array on abc

//name.lenghts - displays array lenghts



/* loops */


//for

/*
for(var; statement; whattodowithvar) {
	other code
}
*/

//while

/*

while (condition) {
	action
}

*/

// do while is same thing but first doing a action and after it checking

// loop operators

// break   - fully exit loop  how to use:

/* 

for (conditions) {
	if(condition) {
	break;
	}

	other code
}

*/


// continue   - can dont do a piece of code if condition is true    how to use:                            propuskaet kusok koda

/* 

for (conditions) {
	if(condition) {
	continue;
	}

	other code
}

*/






/* How to write all pieces of array with for loop

var tea = [5, 4, 7, 6, "wow"];

var i = 0;

for(i, i < tea.lenght, i++) {
	console.log("Element" + i +":" + tea[i]);
}

*/



// alert("text");     - alert window

// confirmation("text");     - confirmation window

// prompt("text");           - window with input




//funcs

// function <funcname>(<parameterinput>){
//                              to create function
//}
//if there is parameter input, so when u use it you must do          functionname(<paramerterOrVar>)
// can contain couple parameter inputs




// events
// add onClick to the thing and write the func name to craete "event tracker"

//most important attributes

//onchange	       An HTML element has been changed
//onclick	       The user clicks an HTML element
//ondbclick	       The user clicks an HTML element tvise
//onmouseover	   The user moves the mouse over an HTML element
//onmouseout	   The user moves the mouse away from an HTML element
//onkeydown	       The user pushes a keyboard key
//onload	       The browser has finished loading the page