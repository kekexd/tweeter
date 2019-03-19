$(document).ready(function() {
  $(".new-tweet form textarea").on('input', function(){
    const inputed = $(this).val().length;
    if(inputed <= 140){
      $(this).parent().find(".counter").html(inputed);
      //console.log('input length:', $(this).val().length);
    } else {
      $(this).parent().find(".counter").html(140 - inputed);
      //console.log('input length:', 140 - $(this).val().length);
    }
  });
});