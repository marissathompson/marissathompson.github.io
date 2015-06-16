$(document).ready(function(){

  $(".mar-image").hover(function() {
      $(this).animate({
        width: "29%"
      }, 300 );
    },
    function() { 
      $(this).animate({
        width: "20%"
      }, 200 );
    }
  )

});
