// -------------CUSTOM-CURSOR-[END]-------------
import scrollFunction from './animate-header';
// -------------CUSTOM-HORIZONTAL-INDICATOR-[START]-------------
window.onscroll = function () {
  myFunction();
  scrollFunction();
};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
}

// -------------CUSTOM-HORIZONTAL-INDICATOR-[END]-------------

// -------------CUSTOM-ANCHOR-[START]-------------

// Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight() * 1.2;

$(window).scroll(function () {
  if ($(document).scrollTop() > toggleHeight) {
    //Adds active class to make button visible
    $('#up-button').addClass('active');
  } else {
    //Removes active class to make button visible
    $('#up-button').removeClass('active');
  }
});
// -------------CUSTOM-ANCHOR-[END]-------------
