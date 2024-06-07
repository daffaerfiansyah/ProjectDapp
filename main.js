// ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING

window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader =document.getElementsByClassName("navbar");

    if (document.body.scrollTop > 50 || document.documentElement.ScrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// TYPING EFFECT //
var typingEffect = new Typed(".typedtext",{
    strings : ["Web Developer", "Web Designer", "Engineering"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
});

ScrollReveal().reveal('.top-header', { delay: 500 });
ScrollReveal().reveal('.card', { delay: 700 });