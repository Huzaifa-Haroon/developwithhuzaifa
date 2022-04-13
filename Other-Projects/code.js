// for header

function myFunction(x) {
    x.classList.toggle("change");
}

let togglemenu = document.querySelector('.toggle-menu');
let linksdiv = document.querySelector('.links-div');

togglemenu.addEventListener('click', function () {
    linksdiv.classList.toggle('showmenu');
})

// calling list items from header

let homeLink = document.querySelector('.home-link');
let aboutLink = document.querySelector('.about-link');
let contactLink = document.querySelector('.contact-link');
let servicesLink = document.querySelector('.services-link');
let reviewsLink = document.querySelector('.reviews-link');

// calling sections

let sections = document.querySelector('.section');
let home = document.querySelector('.home');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');
let services = document.querySelector('.services');
let reviews = document.querySelector('.reviews');


homeLink.addEventListener('click',function(){
    home.style.transform = "translateY(0)";
    document.querySelector('.navbar').style.backgroundColor = "brown";
    about.style.transform = "translateY(100%)";
    contact.style.transform = "translateY(100%)";
    services.style.transform = "translateY(100%)";
    reviews.style.transform = "translateY(100%)";

})
aboutLink.addEventListener('click',function(){
    about.style.transform = "translateY(0)";
    document.querySelector('.navbar').style.backgroundColor = "seagreen";
    home.style.transform = "translateY(100%)";
    contact.style.transform = "translateY(100%)";
    services.style.transform = "translateY(100%)";
    reviews.style.transform = "translateY(100%)";

})

contactLink.addEventListener('click',function(){
    contact.style.transform = "translateY(0)";
    document.querySelector('.navbar').style.backgroundColor = "black";
    home.style.transform = "translateY(100%)";
    about.style.transform = "translateY(100%)";
    services.style.transform = "translateY(100%)";
    reviews.style.transform = "translateY(100%)";

})
servicesLink.addEventListener('click',function(){
    services.style.transform = "translateY(0)";
    document.querySelector('.navbar').style.backgroundColor = "rebeccapurple";
    about.style.transform = "translateY(100%)";
    contact.style.transform = "translateY(100%)";
    home.style.transform = "translateY(100%)";
    reviews.style.transform = "translateY(100%)";
})
reviewsLink.addEventListener('click',function(){
    reviews.style.transform = "translateY(0)";
    document.querySelector('.navbar').style.backgroundColor = "slategray";
    about.style.transform = "translateY(100%)";
    contact.style.transform = "translateY(100%)";
    services.style.transform = "translateY(100%)";
    home.style.transform = "translateY(100%)";
})