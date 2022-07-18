let slideIndex = 1;
showSlides(slideIndex);
// Starts the slideshow at slide 1

function plusSlides(n) {
  showSlides(slideIndex += n);
} //Controls the ability to go to the next slide


function currentSlide(n) {
  showSlides(slideIndex = n);
} // Thumbnail image controls

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} //Adds the dots determining where in slideshow you are and creates the slide show motion

function countdown(){
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == 1) {
            alert("Time's up!");
            clearTimeout(time);
                timer.innerHTML- "";
        }

    }
    tick();
} //This creates a countdown using the inner function and variable outer function