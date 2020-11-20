// mid content
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// navbar
var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}


// cursor
let mouseCursor=document.querySelector(".cursor");

// document.querySelector('.images').addEventListener('mouseover',cursor);


function cursor(e){

mouseCursor.style.top=e.pageY+'px';
mouseCursor.style.left=e.pageX+'px';
}

document.querySelector('.images').addEventListener('mouseover',(e)=>{
   window.addEventListener("mousemove",cursor);
    document.querySelector('.cursor').style.visibility='visible';
    console.log(e);
});
document.querySelector('.images').addEventListener('mouseleave',(e)=>{
   window.removeEventListener("mousemove",cursor);
   document.querySelector('.cursor').style.visibility='hidden';
   console.log(e);

});

// about me animations
//Movement Animation to happen
const card = document.querySelector(".card");
const container3 = document.querySelector(".container3");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const profession = document.querySelector(".profession");
const description = document.querySelector(".description");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
container3.addEventListener("mousemove", (e) => {

  let xAxis = (1000  - e.pageX)/200 ;

  let yAxis = (1000 - e.pageY)/200;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container3.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(100px)";
  sneaker.style.transform = "translateZ(100px) rotateZ(-45deg)";
  description.style.transform = "translateZ(65px)";
  profession.style.transform = "translateZ(120px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container3.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  profession.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";


});
