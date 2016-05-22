var navIcon = document.querySelector('.nav-icon');
var navWrapper = document.querySelector('.nav-wrapper');
var navDisplayLi = document.querySelectorAll('.nav-display li');
var navIconSpan = document.querySelectorAll('.nav-icon span');
var increment = 0;

//***************************************************
//            CLICK EVENTS
//***************************************************

// Header Events
$('.nav-icon').on('click', function(){
  $('.nav-wrapper').toggleClass('active-wrapper');
    navDisplayLineOpen();
    navIconRotate();
})

$('.collection-slide-icon').on('click', function() {
  $('html, body').animate({
      scrollTop: $(".collection-about-wrapper").offset().top
  }, 1000);
})

$('.about-slide-icon').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.about-history-wrapper').offset().top
  }, 1000)
})

//***************************************************
//            EVENTS BY LOCATIONS
//***************************************************

// var loc is used with substr to varify location path
var loc = (window.location.pathname);

$(window).on('scroll', function() {

  // Collection Page Functions
  if (loc.substr(0, 11) == '/collection') {
    aboutInfo();
    aboutImg();
    specInfo();
    specImg()
    cHistoryTxtSlide();
    cHistoryTxtTwoSlide();
}

// About Page Functions
  if (loc.substr(0, 6)  == '/about'){
    aHistorySlide();
    aHistoryOneSlide()
  }


  // Contact Page Functions
  if (loc.substr(0, 8)  == '/contact') {
    increment = $(window).scrollTop() / -2;
    cIntroSlideBackground();
  }


})


$(window).on('load', function() {
  setTimeout(function(){
    cIntroTxtSlide()
    aIntroAnimations()
  }, 300)
})

// Call Google Maps function || Contact Page
initMap();



//***************************************************
//                    Functions
//***************************************************

function navDisplayLineOpen(){
  for(var i = 0; i < navDisplayLi.length; i++){

    if(navDisplayLi[i].style.display !== 'flex'){
      navDisplayLi[i].style.display = 'flex';
    } else {
      setTimeout(function(){
        navDisplayLi[i].style.display = 'none';
      }, 500)
    }
  }

  display();
}

function display(){
  for(var i = 0; i < navDisplayLi.length; i++){
      navDisplayLi[i].classList.toggle('active-li');
  }
}

// Function that loops through and spans of the nav-icon class
function navIconRotate() {
  for(var i = 0; i < navIconSpan.length; i++){
    navIconSpan[i].classList.toggle('active-rotate');
  }
}

// About Info Function || Collection Page
function aboutInfo() {
  if ($(window).scrollTop() >= $('.about-info').offset().top - ($(window).height() * 0.8)) {
    $('.about-info').addClass('active-about-info');
  }
}

// About Info Img Function || Collection Page
function aboutImg(){
  if ($(window).scrollTop() >= $('.about-info img').offset().top - ($(window).height() * 1.2)) {
    $('.about-info img').addClass('active-about-info');
  }
}

// Spec Info Function || Collection Page
function specInfo(){
  if ($(window).scrollTop() >= $('.spec-col-info').offset().top - ($(window).height() * 0.8)) {
    $('.spec-col-info').addClass('active-col');
  }
}

// Spec Info Img Function || Collection Page
function specImg() {
  if ($(window).scrollTop() >= $('.spec-col-img').offset().top - ($(window).height() * 0.8)) {
    $('.spec-col-img').addClass('active-col');
  }
}

// Intro Text Animation || Collection Page
function cIntroTxtSlide() {
    $('.collection-intro-display h1').addClass('active-intro-text');
    $('.collection-intro-display p').addClass('active-intro-text');
}

// History H1 Text Animation || Collection Page
function cHistoryTxtSlide(){
  if ($(window).scrollTop() >= $('.history-layout-top h1').offset().top - ($(window).height() * 1.2)) {
    $('.history-layout-top h1').addClass('active-history-text');
  }
}

// History Two P Text Animation || Collection Page
function cHistoryTxtTwoSlide() {
  if ($(window).scrollTop() >= $('.history-two').offset().top - ($(window).height() * 0.8)) {
    $('.history-two p').addClass('active-history-text');
  }
}

// Intro Header Animations || About Page
function aIntroAnimations() {
  $('.about-intro-header h2').addClass('active-about-intro');
  $('.about-intro-header p').addClass('active-about-intro');
}

// History Slide in || About Page
function aHistorySlide() {
  if ($(window).scrollTop() >= $('.about-history-wrapper').offset().top - ($(window).height() * 0.8)) {
    $('.about-history-info').addClass('active-history');
  }
}

// History Slide in || About Page
function aHistoryOneSlide() {
  if ($(window).scrollTop() >= $('.-one').offset().top - ($(window).height() * 0.8)) {
    $('.-one').addClass('active-one');
  }
  if ($(window).scrollTop() >= $('.-two').offset().top - ($(window).height() * 0.8)) {
    $('.-two').addClass('active-two');
  }
  if ($(window).scrollTop() >= $('.-three').offset().top - ($(window).height() * 0.8)) {
    $('.-three').addClass('active-three');
  }
}


// Fixed background Slide on scroll || Contact Page
function cIntroSlideBackground() {
  if (window.innerWidth > 769) {
    $('.contact-intro-img').css({
      'background-position' : '0px '+increment+'px'
    });
  }
}

// Googpe Maps API
function initMap() {
  var myLatLng = {lat: 27.498928, lng: -82.574819};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
}
