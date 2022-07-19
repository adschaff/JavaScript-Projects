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
} //This function gives a digit to different variables that can be called pon in the et element by HTML

function constant_function() {
    const Vehicle = {type:"car", brand: "Mazda", color:"Grey"};
    Vehicle.color = "black";
    Vehicle.price = "$29000"
    document.getElementById("Constant").innerHTML = "The cost of the " + Vehicle.brand + " was " + Vehicle.price;
    
} //Here I set a constant of "Vehicle" but then changed the color property from grey to black


var X = 82;
document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
document.write ("<br>" + X); //demonstrating how a let keyword cannot be accesses outside of a block




document.getElementById("try_return").innerHTML = myFunction("Alex");

function myFunction(name) {
  return "Hello " + name;
} //demonstrating the return method


 let machine = {
    type: "Espresso ",
    maker: "Profitec ",
    level: "600 ",
    metal: "Stainless Steel",
    description : function() {
        return "The machine is " + this.type + this.maker + this.level + this.metal;
    }
 };
 document.getElementById("Machine_Object").innerHTML = machine.description();
// utilizing the the "this" keyword to set the properties of an object

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";

} 
document.getElementById("break").innerHTML = text;
//break statement 

let text_2 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text_2 += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text_2; //continue statement