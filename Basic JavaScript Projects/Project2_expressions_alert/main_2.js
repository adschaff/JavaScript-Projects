function learn() {
var A = 2;
var B = 4;
document.getElementById("test").innerHTML = A + B; 
} //This is the first part of the assignment: I combined the two variables and told the test element to produce the number 6 upon a button click

function myFunction () {
  var sentence = "This is cool";
  sentence += " and I am enjoying it!";
  document.getElementById("Concatenate").innerHTML = sentence;
} //This was more clear cute -- using the + operator, i added two parts of a sentence and used the p onclick in the html to have the html spit out my combined variables