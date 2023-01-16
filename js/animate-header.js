window.onscroll = function () {
  myFunction();
  scrollFunction();
};

function scrollFunction() {
  let scrollPos = 100;
  let header = document.getElementById('header');
  console.log(header);
  if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}
// -------------CUSTOM-HORIZONTAL-INDICATOR-[START]-------------
function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
}
// -------------CUSTOM-HORIZONTAL-INDICATOR-[END]-------------
