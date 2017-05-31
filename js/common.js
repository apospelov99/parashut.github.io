$('.parallax-window').parallax({imageSrc: 'img/banner_section_two.png'});






/*
$(function() {

	// Custom JS

});

var animation = function(){	
	var clientScreenH = $(window).height();
	var scrollTop = $(window).scrollTop();			  	
	$(".animation").each(function() {
		var AnimationType = $(this).attr("data-animate");		
		var AelementT = $(this).offset().top - scrollTop;    
		$(this).attr("data-top", AelementT + "px");		
		var thisPosition = AelementT;
		if ((clientScreenH - 50) > thisPosition){
			$(this).addClass(AnimationType + " animated");
		}else {
			$(this).removeClass(AnimationType + " animated");
		}		
	});	
};
$(window).load(function(){
	animation();
});
/*$(window).scroll(function() {
  animation();
});
*/

/*navigation*/
/*
$('.mobileMenu').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$('header, main').toggleClass('open');
	$('body').toggleClass('overflow-hedden');
});*/