$("section").on("click", ".like", function(){  //bind to the .like icon which is created dynamically
  //$(".nLikes").append("1");
  $(this).toggleClass("active"); // toggle like and unlike
  const tweetId = $(this).parent().parent().parent().data("id")
  //console.log(tweetId)
  $.ajax({
    url: `/tweets/${tweetId}/like`,
    type: "PUT",
    data: {'like': 1}
  })
  .done(function(){
    console.log('post')
  })
})
