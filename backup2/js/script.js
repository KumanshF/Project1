/*----SET height OF DIV---*/
$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    if(windowHeight>350){
    	$('.viewFirst').css('min-height', windowHeight);
  	};}
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });

 $('#main-content').load(MTP_ACT.html+'#content')

});

/*--------NAV TOGGLE COLLAPSE ON LOSING FOCUS--*/
$(function (){
	$("#navbarToggle").blur(function (event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768){
			$("#bs-example-navbar-collapse-1").collapse('hide');
		}
	});
    $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

/*---------LOADING CONTENT INTO DIV #MAIN-CONTENT-------*/
$(document).ready(function() {
  $('#main-content').load('mtpAct.html');
})
$('nav a').on('click', function(e){
	e.preventDefault();
	var url=this.href;
	$('#main-content').load(url+'#content').hide().fadeIn('slow');
	});


$("nav a").on("click", function(){
	$('nav li.active').removeClass('active');
   $(this).parent().addClass("active");
});

/*-------------SCROLL DOWN BUTTON---------*/
$("#scrollDown").click(function() {
    windowWidth=$(window).innerWidth();
    if (windowWidth>768) {
    	$('html,body').animate({
        scrollTop: $("#section2").offset().top},
        'slow');
    }
    else{
    	$('html,body').animate({
        scrollTop: $(".navbar-header").offset().top},
        'slow');
    }
});

/*---------------ajax-utils dynamic load-------*/
/*
(function (global) {

var dc = {};

var homeHtml = "mtpact.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});


global.$dc = dc;

})(window);
*/


