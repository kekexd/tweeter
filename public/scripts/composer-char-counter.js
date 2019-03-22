$(document).ready(function() {
  $(".new-tweet form textarea").on('input', function(){
    const inputed = $(this).val().length;
    const toInput = 140 - inputed;
    if(inputed <= 140){
      $(this).parent().find(".counter").html(toInput).css("color", "#244751"); // $("span.counter")
    } else {
      $(this).parent().find(".counter").html(140 - inputed).css("color", "red");
    }
  });
});