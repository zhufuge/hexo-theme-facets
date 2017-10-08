$(document).ready(function() {
  $("table").wrap("<div class='table-responsive'></div>");
  $("table").addClass("table");

  $('pre br').remove();

  var $window = $(window);
  var $toc_wrap = $('.toc-wrap');
  var HeightOfHeader = $('.intro-header').height() -
        $('.navbar').height();

  $window.scroll(function() {
    if($window.scrollTop() > HeightOfHeader) {
      $toc_wrap.addClass('toc-fixed');
    } else {
      $toc_wrap.removeClass('toc-fixed');
    }
  });
});
