const $menu = $("#menu");
const $closeMenu = $("#close-menu");
const $dropdown = $(".open-dropdown");
const $closeDropdown = $(".close-dropdown");

//when click on menu icon...
$(document).ready(function(){
	$('#menu').click(function(){
		$(this).toggleClass('open');
    $("nav").slideToggle();
	});
});

// //when click on menu icon...
// $menu.click(function(){
//   //toggle nav on
//   $("nav").slideToggle();
//   //hide menu icon
//   $menu.css("display","none");
//   //show close icon
//   $closeMenu.css("display","block");
// });
//
// //when click on close menu icon
// $closeMenu.click(function(){
//   //toggle nav on
//   $("nav").slideToggle();
//   //hide close icon
//   $closeMenu.css("display","none");
//   //show menu icon
//   $menu.css("display","block");
// });

// progressive disclosure

$dropdown.click(function(){
  //toggle dropdown
  $(this).parent().siblings("div").slideToggle();
  //hide close icon
  $(this).css("display","none");
  //show menu icon
  $(this).siblings().css("display","block");
  //hide img in mobile view
  if($(window).width()<480){
    $(this).parent().siblings("img").fadeOut();
  }
  ;});

$closeDropdown.click(function(){
  //toggle dropdown
  $(this).parent().siblings("div").slideToggle();
  //hide close icon
  $(this).css("display","none");
  //show menu icon
  $(this).siblings().css("display","block");
  if($(window).width()<480){
    $(this).parent().siblings("img").fadeIn();
  }
});
