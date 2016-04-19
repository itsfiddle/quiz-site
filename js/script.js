$(function () {
  $("div").click(function() {
    $('column').css('border','1px solid red'); } 
  });
});

$('photo').on("click", function(e) {
    $("div").css('border', '2px solid red');

  });
});