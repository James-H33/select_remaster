function navDisplayLineOpen(){for(var o=0;o<navDisplayLi.length;o++)"flex"!==navDisplayLi[o].style.display?navDisplayLi[o].style.display="flex":setTimeout(function(){navDisplayLi[o].style.display="none"},500);display()}function display(){for(var o=0;o<navDisplayLi.length;o++)navDisplayLi[o].classList.toggle("active-li")}function navIconRotate(){for(var o=0;o<navIconSpan.length;o++)navIconSpan[o].classList.toggle("active-rotate")}function aboutInfo(){$(window).scrollTop()>=$(".about-info").offset().top-.8*$(window).height()&&$(".about-info").addClass("active-about-info")}function aboutImg(){$(window).scrollTop()>=$(".about-info img").offset().top-1.2*$(window).height()&&$(".about-info img").addClass("active-about-info")}function specInfo(){$(window).scrollTop()>=$(".spec-col-info").offset().top-.8*$(window).height()&&$(".spec-col-info").addClass("active-col")}function specImg(){$(window).scrollTop()>=$(".spec-col-img").offset().top-.8*$(window).height()&&$(".spec-col-img").addClass("active-col")}function cIntroTxtSlide(){$(".collection-intro-display h1").addClass("active-intro-text"),$(".collection-intro-display p").addClass("active-intro-text")}function cHistoryTxtSlide(){$(window).scrollTop()>=$(".history-layout-top h1").offset().top-1.2*$(window).height()&&$(".history-layout-top h1").addClass("active-history-text")}function cHistoryTxtTwoSlide(){$(window).scrollTop()>=$(".history-two").offset().top-.8*$(window).height()&&$(".history-two p").addClass("active-history-text")}function aIntroAnimations(){$(".about-intro-header h2").addClass("active-about-intro"),$(".about-intro-header p").addClass("active-about-intro")}function aHistorySlide(){$(window).scrollTop()>=$(".about-history-wrapper").offset().top-.8*$(window).height()&&$(".about-history-info").addClass("active-history")}function aHistoryOneSlide(){$(window).scrollTop()>=$(".-one").offset().top-.8*$(window).height()&&$(".-one").addClass("active-one"),$(window).scrollTop()>=$(".-two").offset().top-.8*$(window).height()&&$(".-two").addClass("active-two"),$(window).scrollTop()>=$(".-three").offset().top-.8*$(window).height()&&$(".-three").addClass("active-three")}function cIntroSlideBackground(){window.innerWidth>769&&$(".contact-intro-img").css({"background-position":"0px "+increment+"px"})}function initMap(){var o={lat:27.498928,lng:-82.574819},t=new google.maps.Map(document.getElementById("map"),{center:o,scrollwheel:!1,zoom:4});new google.maps.Marker({map:t,position:o,title:"Hello World!"})}var navIcon=document.querySelector(".nav-icon"),navWrapper=document.querySelector(".nav-wrapper"),navDisplayLi=document.querySelectorAll(".nav-display li"),navIconSpan=document.querySelectorAll(".nav-icon span"),increment=0;$(".nav-icon").on("click",function(){$(".nav-wrapper").toggleClass("active-wrapper"),navDisplayLineOpen(),navIconRotate()}),$(".collection-slide-icon").on("click",function(){$("html, body").animate({scrollTop:$(".collection-about-wrapper").offset().top},1e3)}),$(".about-slide-icon").on("click",function(){$("html, body").animate({scrollTop:$(".about-history-wrapper").offset().top},1e3)});var loc=window.location.pathname;$(window).on("scroll",function(){"/collection"==loc.substr(0,11)&&(aboutInfo(),aboutImg(),specInfo(),specImg(),cHistoryTxtSlide(),cHistoryTxtTwoSlide()),"/about"==loc.substr(0,6)&&(aHistorySlide(),aHistoryOneSlide()),"/contact"==loc.substr(0,8)&&(increment=$(window).scrollTop()/-2,cIntroSlideBackground())}),$(window).on("load",function(){setTimeout(function(){cIntroTxtSlide(),aIntroAnimations()},300)}),initMap();