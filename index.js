document.addEventListener("DOMContentLoaded", function () {
  var controlBtn = document.getElementById("audioControl");
  controlBtn.textContent = "Tocar Música";
});

function toggleAudio() {
  var musica = document.getElementById("musicaFundo");
  if (musica.paused) {
    musica.play();
    controlBtn.textContent = "Pausar Música";
  } else {
    musica.pause();
    controlBtn.textContent = "Tocar Música";
  }
}

function toggleAudio2() {
    var musica2 = document.getElementById("musicaFundo2");
    if (musica2.paused) {
        musica2.play();
        document.getElementById("audioControl2").textContent = "Pausar Segunda Música";
    } else {
        musica2.pause();
        document.getElementById("audioControl2").textContent = "Tocar Segunda Música";
    }
}


var slideIndex = 1;
showSlides(slideIndex);

// Funções para controlar o slideshow
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
