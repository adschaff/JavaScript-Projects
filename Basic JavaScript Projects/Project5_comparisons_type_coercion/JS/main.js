document.write(typeof "word");

function Not_Infinite () {
    var A = -3E310;
    document.getElementById("Not_Infinity").innerHTML = A;
    } //Not infinite number

function Combine() {
    document.getElementById("combine").innerHTML = ("Hello" + 4);
} //Combining a word and a number in a string!

function Infinite () {
var A = 3E310;
document.getElementById("Not_Infinity").innerHTML = A;
} //Infinite number!

function Double() {
document.getElementById("Double").innerHTML = (10 == "10");
} //Does 10 as a number equal ten as a word with double equal?

function XY() {
X = 10;
Y = 10;
document.getElementById("X_Y").innerHTML = (X === Y);
} //Triple equal sign checking if 10 = 10 using variables

function greater() {
    document.getElementById("greater").innerHTML = (10 < 8);
    } //Using less than or greater to

function less() {
        document.getElementById("less").innerHTML = (8 > 10);
        }//Using less than or greater to

function and_and() {
    document.getElementById("and_and").innerHMTL = (5 > 2 && 10 > 4);
} //Using Boolean to see if the statement "AND" is true or false
function or_or() {
    document.getElementById("or_or").innerHMTL = (5 > 2 || 10 > 4);
} //Using Boolean to see if the statement "OR" is true or false

function not() {
    document.getElementById("Not").innerHTML = !(5 < 10);
} //Using Boolean (!) to see if the statement is true or false