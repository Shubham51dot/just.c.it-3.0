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
