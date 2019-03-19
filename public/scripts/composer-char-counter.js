$(document).ready(function() {
  $(".new-tweet form textarea").on('keyup', function(){
    if($(this).val().length <= 140){
      console.log('input length:', $(this).val().length);
    } else {
      console.log('input length:', 140 - $(this).val().length);
    }

  });
});