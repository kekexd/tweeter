$("section").on("click", ".like", function(){  //bind to the .like icon which is created dynamically
  //$(".nLikes").append("1");
  const tweetId = $("article").data("id")
  console.log(tweetId)
  $(this).toggleClass("active");
})
