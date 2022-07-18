function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
} //This is a while loop


function length() {
var text = "Hello World!";
var length = text.length;
document.getElementById("length").innerHTML = length;
} //The length string property allows you to determine the length of a string

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
} //The for loop repeats code a number of times

function dog_array() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "howling";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "playing";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " + Dog_Picture[1] + ".";
}