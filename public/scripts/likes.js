$("section").on("click", ".like", function(){  //bind to the .like icon which is created dynamically
  //$(".nLikes").append("1");
  $(this).toggleClass("active"); // toggle like and unlike
  const tweetId = $("article").data("id")
  console.log(tweetId)
  $.post(`/tweets/${tweetId}`)
  .done(function(){
    console.log('post')
  })
})
