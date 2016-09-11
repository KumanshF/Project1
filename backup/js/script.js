$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#viewFirst').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});


$(function (){
	$("#navbarToggle").blur(function (event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768){
			$("#bs-example-navbar-collapse-1").collapse('hide');
		}
	});
});

$('nav a').on('click', function(e){
	e.preventDefault();
	var url=this.href;
	$('#main-content').load(url+'#content').hide().fadeIn('slow');
	});


$("nav a").on("click", function(){
	$('nav li.active').removeClass('active');
   $(this).parent().addClass("active");
});


