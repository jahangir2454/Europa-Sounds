$(function () {
  // navbar part
  window.addEventListener("scroll", function () {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // testmonial slider part
  $(".testmonialSlider").on("init", function (event, slick) {
    $(this).append(
      '<div class="slick-counter"><span class="current-num"></span> / <span class="total-num"></span></div>'
    );
    $(".current-num").text(slick.currentSlide + 1);
    $(".total-num").text(slick.slideCount);
  });
  $(".testmonialSlider").slick({
    accessibility: false,
    autoplay: false,
    dots: false,
    arrow: true,
    initialSlide: 0,
    slidesToShow: 1,
    sliderToScroll: 1,
    fade: true,
    prevArrow: '<i class="fas fa-arrow-left slicer-arrowsl"></i>',
    nextArrow: '<i class="fas fa-arrow-right slicer-arrowsr"></i>',
  });
  $(".testmonialSlider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".current-num").text(nextSlide + 1);
    }
  );
  // events slider part
  $(".events").slick({
    arrow: true,
    sliderToScroll: 1,
    slidesToShow: 3.1,
    autoplay: false,
    autoplaySpeed: 2000,
    accessibility: false,
    dots: false,
    prevArrow: '<i class="fas fa-arrow-left slicer-arrowse"></i>',
    nextArrow: '<i class="fas fa-arrow-right slicer-arrowser"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // award part slider
  $(".awards").slick({
    arrow: true,
    sliderToScroll: 1,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    accessibility: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // gallery photo part start
  $(".gallerys").slick({
    arrow: true,
    sliderToScroll: 1,
    slidesToShow: 2.1,
    autoplay: false,
    autoplaySpeed: 2000,
    accessibility: false,
    dots: false,
    prevArrow: '<i class="fas fa-arrow-left slicer-arrowse garrow"></i>',
    nextArrow: '<i class="fas fa-arrow-right slicer-arrowser garrow2"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // videos gallery part start
  $(".videos").slick({
    arrow: true,
    sliderToScroll: 1,
    slidesToShow: 1.1,
    autoplay: false,
    autoplaySpeed: 2000,
    accessibility: false,
    dots: false,
    prevArrow: '<i class="fas fa-arrow-left slicer-arrowse garrow"></i>',
    nextArrow: '<i class="fas fa-arrow-right slicer-arrowser garrow2"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// magnific popup js
$(document).ready(function () {
  $(document).ready(function () {
    $(".galleryes").magnificPopup({
      type: "image",
      delegate: "a",
      gallery: { enabled: true },
    });
  });
});
