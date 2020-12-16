/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  const tweetData = [];

 const createTweetElement = (tweetData) => {
  const user = tweetData.user;
  let date = tweetData.created_at;
  let $tweet = `<article class="tweet-container">
  <header class="tweet-header">
  <div>
  <img class="avatar" src=${user.avatars}>
  <h1 class="name">${user.name}</h1>
  </div>
  <h2 class="user-tag">${user.handle}</h2>
  </header>
  <div class="tweet-content">
  <p>${tweetData.content["text"]}</p>
  </div>
  <footer>
  <p>${new Date(date).toDateString()}</p>
  <span>
  <i class="fa fa-flag" aria-hidden="true"></i>
  <i class="fa fa-retweet" aria-hidden="true"></i>
  <i class="fa fa-heart" aria-hidden="true"></i>
  </span>
  </footer>
  </article>`

  return $tweet;
 };

 const renderTweets = tweetData => {
  for (let tweet of tweetData){
    $('.tweet-wrap').append(createTweetElement(tweet));
  }
};

 $('.tweet-form').on('submit', function(event) {
  event.preventDefault();
  $.ajax({method: 'POST',
          url: '/tweets',
        data: $(this).serialize(),
      })
      .then(function () {
        loadTweets();
        $('.tweet-wrap').empty();
        })
      .catch((err) => window.alert("TWEET FIELD IS EMPTY!"));
      $(this).children('textarea').val('');
      $(this).children('output').val('140');

});

const loadTweets = function() {
  $.ajax({method: 'GET',
          url: '/tweets'})
          .then(function(data) {
            renderTweets(data);
          })
};

});
