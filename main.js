// ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "navbar-nav";
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

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 250})

sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  })

srLeft.reveal('.card-about',{delay: 100})

sr.reveal('.project-box',{interval: 200})

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            this.classList.add('active');
        });
    });
});