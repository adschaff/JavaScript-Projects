function my_Dictionary() {
    var Beagle = {
        Size: "Small",
        Color: "Brown Black White",
        Howl: "Loud",
        Age: 8,
        Sound: "Ahooooo!" //Giving my dog a variety of different attributes through JavaScript key structure
    };
    delete Beagle.Age; //I've deleted the Age attribute here because I do not want to be reminded that my dog is getting older
    document.getElementById("Dictionary").innerHTML = Beagle.Sound; //Pushing the script to the HTML via an Element ID
} 


