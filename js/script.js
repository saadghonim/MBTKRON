const Nav = document.querySelector("nav");
const close_ = document.querySelector(".close_");
const btn_bars = document.querySelector(".btn_bars");
const moboverlay = document.querySelector(".moboverlay");
const hover_menu = document.querySelector(".hover_menu");
const ul_menu = document.querySelector(".ul_menu");
const body_ = document.querySelector("body");


btn_bars.addEventListener("click", function() {
  Nav.classList.add("open_menu");
  moboverlay.style.display = "block";
  body_.classList.add("over_");
});
close_.addEventListener("click", function() {
  Nav.classList.remove("open_menu");
  moboverlay.style.display = "none";
  body_.classList.remove("over_");

});
moboverlay.addEventListener("click", function() {
  Nav.classList.remove("open_menu");
  moboverlay.style.display = "none";
  body_.classList.remove("over_");

});

$(document).ready(function(){
  $(".drag_down, .click_a").click(function () {
    $('html, body').animate({
        scrollTop: $("#about_").offset().top -100
    }, 1000);
  });
  /*~~~~~~~~~~~~~~~~~start counter~~~~~~~~~~~~~ */

/*~~~~~~~~~~~~~~~~~end counter~~~~~~~~~~~~~ */
$('.reviews .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='las la-arrow-right'></i>", "<i class='las la-arrow-left'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
// sub menu

$(".hover_menu").click(function(){
  $(".ul_menu").slideToggle("500")
})

if ($(window).width() <= 1200){
$(".c1").unwrap('.block1, .block2')
$(".c2").unwrap('.block3')

$(".c1 , .c2 , .c3").addClass("item")
$(".parent_slide").addClass("owl-carousel")

$('.clients .owl-carousel').owlCarousel({
  loop:true,
  nav:false,
  margin:15,
  autoplay:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:2
      },
      1000:{
          items:5
      }
  }
})
};






});

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 5000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });  
});

// collapse~~~~~~~~
$(document).ready(function(){
  $('.btn_collapse_').click(function(){
    var toggle = $(this).next('.toggle_collapse');
    $(toggle).slideToggle("slow").prev(".color_toggle").toggleClass("poen_co");
    $(toggle).prev().children().children(".backg_toggle").toggleClass("poen_backg");
    $(toggle).parent().prev(".color_toggle").toggleClass("poen_co"); 
    $(this).children().children('.bar--horizontal').toggleClass("is-active");
  });
});

$(window).on('scroll', function() {
  if($(window).scrollTop() > 150) {
        $("header").addClass("fixed_");
  } else {
      $("header").removeClass("fixed_");
  };
});

var fixedBar = document.querySelector("header"),
  prevScrollpos = $(window).scrollTop();

window.onscroll = function() {
  var o = $(window).scrollTop();
  prevScrollpos < o && prevScrollpos > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), prevScrollpos = o
}, document.documentElement.style.setProperty("--animate-duration", ".5s");

