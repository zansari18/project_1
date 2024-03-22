// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $("#box").on("click", function  () {
    ("#age-verification").prop("checked", true);
    ("#box").html("<p>&#10004;</p>");
  });
});
