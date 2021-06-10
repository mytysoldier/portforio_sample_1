$(function () {
  $(".img-wrap img:nth-child(n+2)").hide();
  setInterval(() => {
    $(".img-wrap img:first-child").fadeOut(2000);
    $(".img-wrap img:nth-child(2)").fadeIn(2000);
    $(".img-wrap img:first-child").appendTo(".img-wrap");
  }, 8000);

  $("#page_top").on("click", function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  var logoLt = $("#menu .logo").offset().left;

  $(window).scroll(function () {
    var logo = $("#menu .logo"),
      menu = $("#menu"),
      scroll = $(window).scrollTop(),
      pageTop = $("#page_top");
    var rt =
      $(window).width() -
      ($(".img-wrap").offset().left + $(".img-wrap").outerWidth());

    if (scroll >= 100) {
      logo.addClass("logo-fixed");
      logo.css("left", logoLt);
      menu.addClass("top-tab-fixed");
      menu.css("right", rt);
      pageTop.removeClass("d-none");
    } else {
      logo.removeClass("logo-fixed");
      menu.removeClass("top-tab-fixed");
      pageTop.addClass("d-none");
    }
  });
});
