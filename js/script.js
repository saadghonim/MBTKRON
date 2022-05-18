const Nav = document.querySelector("nav");
const close_ = document.querySelector(".close_");
const btn_bars = document.querySelector(".btn_bars");
const moboverlay = document.querySelector(".moboverlay");
const body_ = document.querySelector("body");

// menu 
btn_bars.addEventListener("click", function() {
  Nav.classList.add("open_menu");
  body_.classList.add("over_");
});
close_.addEventListener("click", function() {
  Nav.classList.remove("open_menu");
  body_.classList.remove("over_");
});
// ~~~~~~~~~~~~~~~

$(document).ready(function(){

// ~~~~~~~~~~~~~~~~~~~drag_down
$(".drag_down, .click_a").click(function () {
  $('html, body').animate({
      scrollTop: $("#about_").offset().top -10
  }, 1000);
});
// ~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~counte
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
    }
  });  
});
// ~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~reviews
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
// ~~~~~~~~~~~~~~~

// sub menu
$(".hover_menu").click(function(){
  $(".ul_menu").slideToggle("500")
})
// popUp
$(".click_popup").click(function(){
  $(".fixed_form").addClass("open_popup")
  $(".moboverlay").fadeIn("500");
  $("body").addClass("over_");
});
$(".moboverlay, .clsoe_popup").click(function(){
  $(".fixed_form").removeClass("open_popup")
  $(".moboverlay").fadeOut("500");
  $("body").removeClass("over_");
});
// ~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~services
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
          items:3
      },
      600:{
          items:4
      }
  }
})
};
// ~~~~~~~~~~~~~~~

// collapse~~~~~~~~
$('.btn_collapse_').click(function(){
  var toggle = $(this).next('.toggle_collapse');
  $(toggle).slideToggle("slow").prev(".color_toggle").toggleClass("poen_co");
  $(toggle).prev().children().children(".backg_toggle").toggleClass("poen_backg");
  $(toggle).parent().prev(".color_toggle").toggleClass("poen_co"); 
  $(this).children().children('.bar--horizontal').toggleClass("is-active");
});
// ~~~~~~~~~~~~~~~

//~~~~~~~~~ fixed header
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
// ~~~~~~~~~~~~~~~




});
// ~~~~~~~~~~~~~~preload~~~~~~~~~~~~~~
document.onreadystatechange = function(e)
{
  if(document.readyState=="interactive")
  {
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) 
    {
      set_ele(all[i]);
    }
  }
}
function check_element(ele)
{
  var all = document.getElementsByTagName("*");
  var totalele=all.length;
  var per_inc=100/all.length;

  if($(ele).on())
  {
    var prog_width=per_inc+Number(document.getElementById("progress_width").value);
    document.getElementById("progress_width").value=prog_width;
    $("#bar1").animate({width:prog_width+"%"},3,function(){
      if(document.getElementById("bar1").style.width=="100%")
      {
        $(".progress").fadeOut("slow");
      }			
    });
  }

  else	
  {
    set_ele(ele);
  }
}
function set_ele(set_element)
{
  check_element(set_element);
}
// ~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~wow.js
new WOW().init();
document.documentElement.style.setProperty('--animate-duration', '.8s');

// ~~~~~~~~~~~~back_top
var btn = $('.back_top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});


var $disabledResults = $(".js-example-disabled-results");
$disabledResults.select2()