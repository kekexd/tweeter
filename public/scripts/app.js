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
  let $tweet = $("<article>").addClass("tweet").attr("data-id", data._id);
  let $header = $("<header>").addClass("tweet-header");

  let $img = $("<img>").attr("src", data.user.avatars.regular);
  let $div1 = $("<div>").addClass("user").text(data.user.name);
  let $div2 = $("<div>").addClass("somebody").text(data.user.handle);
  $header.append($img).append($div1).append($div2);

  let $content = $("<div>").addClass("tweet-content").text(data.content.text);
  let $footer = $("<footer>").addClass("tweet-footer");
  let date = time_ago(data.created_at); //  let date = String(new Date(data.created_at)).substring(0,24);
  let $date = $("<div>").addClass("date").text(date);
  let $icons = $("<div>").addClass("icons");
  let $flag = $("<img>").addClass("icon").attr("src", "/images/flag.png");
  let $retweet = $("<img>").addClass("icon").attr("src", "/images/retweet.png");
  //if number of likes is greater than 0, then set the icon to active state
  if(data.like > 0){
    var $like = $("<img>").addClass("like active").attr("src", "/images/like.png");
  } else {
    var $like = $("<img>").addClass("like").attr("src", "/images/like.png");
  }
  let $nLikes = $("<div>").addClass("nLikes").text(data.like);
  $icons.append($flag).append($retweet).append($like).append($nLikes);
  $footer.append($date).append($icons);
  
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

//calculate relative time
function time_ago(time) {
  switch (typeof time) {
    case 'number':
      break;
    case 'string':
      time = +new Date(time);
      break;
    case 'object':
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  const time_formats = [
    [60, 'seconds', 1], // 60
    [120, '1 minute ago', '1 minute from now'], // 60*2
    [3600, 'minutes', 60], // 60*60, 60
    [7200, '1 hour ago', '1 hour from now'], // 60*60*2
    [86400, 'hours', 3600], // 60*60*24, 60*60
    [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
    [604800, 'days', 86400], // 60*60*24*7, 60*60*24
    [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
    [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
    [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
    [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
    [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  let seconds = (+new Date() - time) / 1000,
    token = 'ago',
    list_choice = 1;

  if (seconds === 0) {
    return 'Just now'
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = 'from now';
    list_choice = 2;
  }
  let i = 0,
    format;
  while (format = time_formats[i++])
    if (seconds < format[0]) {
      if (typeof format[2] == 'string')
        return format[list_choice];
      else
        return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
    }
  return time;
}