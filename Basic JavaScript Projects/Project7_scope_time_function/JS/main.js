var X = 10;
function Add_numbers_1() {
   document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}

Add_numbers_1 ();
Add_numbers_2 ();
//The function above has a global variable of X and the document is being asked to write the two numbers, but i'm not sure how to easily display this in HTML 

function Add_numbers_3() {
    var B = 10;
    document.write(20 + B + "<br>");
}
function Add_numbers_4() {
    document.write(B + 100);
}

Add_numbers_3 ();
Add_numbers_4 ();

//This creates a local variable, but still -- what is simplest way to display this output in HTML


function Add_numbers_1() {
    var D = 10;
    console.log (15 + D);
}
function Add_numbers_2() {
    console.log (D + 100);
} //This is the console log error 

Add_numbers_1();
Add_numbers_2();

function get_Date(){
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
} //Time function that goes off your actual time and hour using a conditional statement

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Vote = "You are old enough to drink!";
    }
    else {
        Vote = "You are not old enough to drink!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
} //this function sets an age variable of 21 or more and then creates conditional outputs of the value of someone's age that they enter on the webe page

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }

    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
} //A conditional function that pulls the time of day and sets the variable at noon