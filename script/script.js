$(document).ready(function () {

      $(".responsive").slick({
        dots: false,
        infinite: true,
        speed: 2500,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      });
        $(".single-item").slick({
          dots: false,
          infinite: true,
          speed: 2500,
          autoplay: true,
          autoplaySpeed: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          vertical: true,
          verticalSwiping: true,
        });



  // current years jQuery
  $("#currentYear").text(new Date().getFullYear());

  // wow animation jQuery
  new WOW().init();

  // Collapse the navbar when a menu item is clicked (mobile view)
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Add active class to the current clicked item
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-nav>li>a").removeClass("active");
    $(this).addClass("active");
  });

  // rendom numbers jQuery
  var $numbers = $(".number");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateNumbers($element) {
    var actualNumber = $element.data("number");
    var interval = setInterval(function () {
      $element.text(Math.floor(Math.random() * 500));
    }, 100);

    setTimeout(function () {
      clearInterval(interval);
      $element.text(actualNumber);
    }, 2000);
  }

  function checkAnimation() {
    $numbers.each(function () {
      if (isElementInViewport(this) && !$(this).hasClass("animated")) {
        $(this).addClass("animated");
        animateNumbers($(this));
      }
    });
  }

  $(window).on("scroll", checkAnimation);
  $(window).on("resize", checkAnimation);

  // Initial check if elements are already in viewport
  checkAnimation();
});
