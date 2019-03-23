$("section").on("click", ".like", function(){  //bind to the .like icon which is created dynamically
  const tweetId = $(this).parent().parent().parent().data("id");
  const currentLikes = Number($(this).siblings(".nLikes").text());
  $(this).toggleClass("active"); // toggle like and unlike
  $(this).siblings(".nLikes").text(currentLikes + 1);
  $.ajax({
    url: `/tweets/${tweetId}/like`,
    type: "PUT",
    data: {'like': 1}
  })
  .done(function(){
    console.log('post')
  })
})
