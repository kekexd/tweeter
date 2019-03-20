/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//display all the tweets from database
function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  for(let i = tweets.length - 1; i > -1; i--){
    //console.log(i)
    let $tweet = createTweetElement(tweets[i]);
    $('#tweets').append($tweet); 
  }
}

//create html elements
function createTweetElement (data) {
  let $tweet = $("<article>").addClass("tweet");
  let $header = $("<header>").addClass("tweet-header");

  let $img = $("<img>").attr("src", data.user.avatars.regular);
  let $div1 = $("<div>").addClass("user").text(data.user.name);
  let $div2 = $("<div>").addClass("somebody").text(data.user.handle);
  $header.append($img).append($div1).append($div2);

  let $content = $("<div>").addClass("tweet-content").text(data.content.text);
  let $footer = $("<footer>").addClass("tweet-footer");
  let $date = $("<div>").addClass("date").text(new Date(data.created_at));
  let $icon = $("<img>").addClass("icon").attr("src", "/images/icon.png");
  $footer.append($date).append($icon);
  
  $tweet.append($header).append($content).append($footer);
  
  return $tweet;
}

//fetching tweets from the tweets page
function loadTweets(){
  $.ajax('tweets', { method: 'GET' })
    .then(function(res){
    renderTweets(res)
  })
}

loadTweets();


// const $button = $(".new-tweet :submit");
// $button.on('click', function () {

// })