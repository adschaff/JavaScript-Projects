function Vote_Function () {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
} //This is my operation to use the ternary operation to determine voting age qualification -- it determines the value of over or under 18

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
} //this sets the keyword "this" for a vehicle

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
//this sets the keyword new along with the variable for each person's ne wcar

function MyFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " +Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
} //This creates a function using the variables created above
function MyFunction_two() {
    document.getElementById("New_and_This").innerHTML = 
"Jack drives a " +Jack.Vehicle_Color + " -colored " + Jack.Vehicle_Model + 
" manufactured in " + Jack.Vehicle_Year;
} //As does this this^ 

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
        function Count() {
            var Starting_point = 9;
            function Plus_one() {Starting_point += 1;}
            Plus_one();
            return Starting_point;
        }
} //This sets the count function within a nested function -- the nested function is adding 1 to the starting point of 9