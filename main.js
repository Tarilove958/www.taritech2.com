

let SpanText = document.getElementById("heroSpanText");

const text = ["WEB DEVELOPER", "WEB DESIGNER" , "WEB PROGRAMMER"];
let textIndex = 0;
let textCharIndex = 0;
 
function typingText() {
    textCharIndex++;
    SpanText.innerHTML = text[textIndex].slice(0, textCharIndex);

    if (textCharIndex === text[textIndex].length){
        textIndex++;
        textCharIndex = 0;
    }
    if (textIndex === text.length){
        textIndex = 0;
    }
}
setInterval(typingText, 300);

let originalText = "Contact";
let newText = "Phone";
let span = document.getElementById("textSpan");
let intervalId;
let count = 0;

function changeText() {
  if (count % 2 === 0) {
    span.innerText = newText;
  } else {
    span.innerText = originalText;
  }
  count++;
}

intervalId = setInterval(changeText, 2000); // change text every 2 seconds


// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function(){
  var navbar = document.querySelector('.navbar');
  var toggleBtn = document.querySelector('.menu-toggle');
  var navLinks = document.querySelectorAll('.navbar ul a');
  if(!navbar || !toggleBtn) return;

  function setIcon(open){
    var icon = toggleBtn.querySelector('ion-icon');
    if(icon){ icon.setAttribute('name', open ? 'close-outline' : 'menu-outline'); }
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggleBtn.addEventListener('click', function(){
    var isOpen = navbar.classList.toggle('open');
    setIcon(isOpen);
  });

  navLinks.forEach(function(link){
    link.addEventListener('click', function(){
      if(window.innerWidth <= 900 && navbar.classList.contains('open')){
        navbar.classList.remove('open');
        setIcon(false);
      }
    });
  });

  window.addEventListener('resize', function(){
    if(window.innerWidth > 900 && navbar.classList.contains('open')){
      navbar.classList.remove('open');
      setIcon(false);
    }
  });
});
