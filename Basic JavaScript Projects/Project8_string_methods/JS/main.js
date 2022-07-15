function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
} //This is very cool -- stringing the variables together to create a a new variable combining them all

function slice_Method() {
var Sentence = "All work and no play makes Johnny a dull boy.";
var Section = Sentence.slice(27,33);
document.getElementById("Slice").innerHTML = Section;
} //This searches for the character numbers within your previous variable and only shows what remains

function Uppercase() {
var text = "Hello World!";
var result = text.toUpperCase();
document.getElementById("Uppercase").innerHTML = result;
} //This method uppercases texts

function Search() {
    var text = "Mr. White has a white house";
    var position = text.search("White");
    document.getElementById("Search").innerHTML = position;
} //This method looks for a word within a previous variable

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
} //returns a number as as tring

function precision_Method() {
    var X = 12938.4012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
} //This function formats a number to a specific set length (here it would be 10 digits long)

function To_Fixed() {
    var num = 5.564390;
    var n = num.toFixed(2);
    document.getElementById("ToFixed").innerHTML = n;
} //toFixed() converts a number to a string, rounded to a specified number of decimals

function Value_of() {
    var num = 15.4;
    var n = num.valueOf();
    document.getElementById("ValueOf").innerHTML = n;
} //valueOf() returns the primitive value of a number