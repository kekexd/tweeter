/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];

//display all the tweets from database
function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  for(let i of tweets){
    //console.log(i)
    let $tweet = createTweetElement(i);
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
  // const $button = $(".new-tweet :submit");
  // $button.on('click', function () {
    $.ajax('tweets', { method: 'GET' })
    .then(function(res){
      renderTweets(res)
    })
//   })
}

loadTweets();