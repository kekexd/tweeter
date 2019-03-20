$("#error").hide();//hide error message on default
$(".new-tweet form").submit(function(e){
  e.preventDefault();
  const length = $(".new-tweet textarea").val().length;
  if(length < 1){
    $("#error").empty();
    $("#error").slideDown();
    $("#error").append("Error: Empty input!");
    
  } else if(length > 140){
    $("#error").empty();
    $("#error").slideDown();
    $("#error").append("Error: This tweet is too long!");
  } else {
    const serialized = $(this).serialize();
    $(".new-tweet textarea").val("");//clear the text field
    $("span.counter").text("0");
    $("#error").hide();
    $.post("/tweets", serialized, function(){
      $.ajax('tweets', { method: 'GET' })
        .then(function(res){
          const newest = res[res.length - 1];
          const newTweet = createTweetElement(newest);
          $('#tweets').prepend(newTweet); // prepend append the new tweet on top
        })
      
    })
  }
})

$("#compose").on("click", function(){
  $(".new-tweet").slideToggle(); //toggle the form
  $(".new-tweet textarea").focus(); //focus on the textarea
})