/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  // const loadTweets = function() {
  //   $.ajax({method: 'GET',
  //           url: '/tweets'})
  //           .then(function(data) {
  //             renderTweets(data);
  //           })
  // };

  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

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

 renderTweets(tweetData);

});
