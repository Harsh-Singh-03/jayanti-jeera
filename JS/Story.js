window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.others-section');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('others-section-anime');
        }
        else {
            reveals[i].classList.remove('others-section-anime');
        }
    }
}

function scrollToSection() {
    var section = document.getElementById("scroll-section");
    const landing = document.querySelector(".landing-animation")
    const height = landing.offsetHeight
    window.scrollTo({ top: height, behavior: "smooth" });
  }