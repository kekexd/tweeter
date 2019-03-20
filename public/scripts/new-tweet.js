$(".new-tweet form").submit(function(e){
  e.preventDefault();
  const length = $(".new-tweet textarea").val().length;
  if(length < 1){
    alert('Empty input!')
  } else if(length > 140){
    alert('This tweet is too long!')
  } else {
    const serialized = $(this).serialize();
    $(".new-tweet textarea").val("");//clear the text field
    $.post("/tweets", serialized, function(){
      // $("#tweets").empty();
      // loadTweets();
      $.ajax('tweets', { method: 'GET' })
        .then(function(res){
          const newest = res[res.length - 1];
          const newTweet = createTweetElement(newest);
          $('#tweets').prepend(newTweet); // prepend append the new tweet on top
        })
      
    })
  }
})
