
function multiplication () {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
} //This function creates a simple multiplication and assigns it to the variable


function division () {
    var simple_Math_two = 48 / 6;
    document.getElementById("Math_2").innerHTML = "48 / 6 = " + simple_Math_two;
} //This function creates a simple divison and assigns it to the variable

function more_Math () {
    var simple_Math_three = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math_3").innerHTML = "1 plus 2, multipolied by 10, divided in half and then subtracted by 5 equals " + simple_Math_three;
}//This function creates a simple divison and assigns a variable to the equation itself

function modulus_Operator() {
    var simple_Math_four = 25 % 6;
    document.getElementById("Math_4").innerHTML = "When you divide 25 by 6 you have a remainder of : " + simple_Math_four;
} //This function creates a percentage variable through equation and then presents it in HTML 

function negation_Operator() {
    var x = 10;
    document.getElementById("Math_5").innerHTML = -x;
} //This function creates a variable and makes that variable negative and then presents it in HTML

function addtion_Function() {
    var addition = 2 + 2;
    document.getElementById("Math_6").innerHTML = "2 + 2 = " + addition;
} //This is a basic addition function

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math_7").innerHTML = "5 - 2 = " + subtraction;
}  //This is a basic subtraction function

function variable() {
var X = 5;
X++;
document.getElementById("Variable_6").innerHTML = "5 + 1 = " + X;
} //This is a function where I have given variable X the number 5 then told it to increment by 1 and then present it in HTML

function variable_other() {
    var B = 5;
    B--;
    document.getElementById("Variable_7").innerHTML = "5 - 1 = " + B;
    } //This is a function where I have given variable B the number 5 then told it to decrease by 1 and then present it in HTML

function random_number() {
    document.getElementById("Random_Number_1").innerHTML = "Random Choice = " + (Math.random());
} //This function pulls a random number and displays it in HTML 