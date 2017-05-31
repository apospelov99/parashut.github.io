//Parallax
$('.parallax-window').parallax({imageSrc: 'img/banner_section_two.png'});

//Animation FadeIn
$(window).scroll(function() {
  $(".animation").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 700) {
      $(".fadeUp").removeClass("fadeUp").addClass("animated fadeInUpBig");
      $(".fadeDown").removeClass("fadeDown").addClass("animated fadeInDownBig");
    }
  });
});

