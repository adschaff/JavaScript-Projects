document.write(typeof "word");

function Not_Infinite () {
    var A = -3E310;
    document.getElementById("Not_Infinity").innerHTML = A;
    }

function Combine() {
    document.getElementById("combine").innerHTML = ("Hello" + 4);
}

function Not_Infinite () {
var A = -3E310;
document.getElementById("Not_Infinity").innerHTML = A;
}

function Infinite () {
    var B = 3E310;
    document.getElementById("Infinite").innerHTML = B;
    }
 
function Double() {
document.getElementById("Double").innerHTML = (10 == "10");
}

function XY() {
X = 10;
Y = 10;
document.getElementById("X_Y").innerHTML = (X === Y);
}

function greater() {
    document.getElementById("greater").innerHTML = (10 < 8);
    }

function less() {
        document.getElementById("less").innerHTML = (8 > 10);
        }

function and_and() {
    document.getElementById("and_and").innerHMTL = (5 > 2 && 10 > 4);
}

function or_or() {
    document.getElementById("or_or").innerHMTL = (5 > 2 || 10 > 4);
}

function not() {
    document.getElementById("Not").innerHTML = !(5 < 10);
}