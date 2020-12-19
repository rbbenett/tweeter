/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
// Escape Function for Non String Entries
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // New Tweet Loads to Main Page via AJAX
  const loadTweets = function() {
    $.ajax({method: 'GET',
      url: '/tweets'})
      .then(function(data) {
        renderTweets(data);
      });
  };

  loadTweets();
  
// New Tweet Creation Function
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
  <p>${escape(tweetData.content["text"])}</p>
  </div>
  <footer>
  <p>${new Date(date).toDateString()}</p>
  <span class="tweet-icons">
  <i class="fa fa-flag" aria-hidden="true"></i>
  <i class="fa fa-retweet" aria-hidden="true"></i>
  <i class="fa fa-heart" aria-hidden="true"></i>
  </span>
  </footer>
  </article>`;

    return $tweet;
  };

// New Tweet Rendering
  const renderTweets = tweetData => {
    for (let tweet of tweetData) {
      $('.tweet-wrap').prepend(createTweetElement(tweet));
    }
  };

// Tweet Submission via AJAX and Event Handler In Case Of Errors
  $('.tweet-form').on('submit', function(event) {
    event.preventDefault();
    const textArea = ".new-tweet textarea";
    let remainingChar = 140 - $(textArea).val().length;
    if (remainingChar < 140 && remainingChar >= 0) {
    $.ajax({method: 'POST',
      url: '/tweets',
      data: $(this).serialize(),
    })
      .then(function() {
        loadTweets();
        $('.tweet-wrap').empty();
      })
    } else if (remainingChar < 0){
      $("#length-alert").slideDown("fast");
      $(textArea).siblings(".tweet-footer").children("output").removeClass("negChars");
    } else if (remainingChar === 140) {
      $("#empty-alert").slideDown("fast");
    }
    $(this).children('textarea').val('');
    $(this).children('div').children('output').val('140');
  });

// Form Toggle Button using "Write a new tweet"
  $("div.write-tweet").on("mouseover", function(event) {
    $(this).css("cursor", "pointer");
  });

  $("div.write-tweet").on("click", function(event) {
    $(".new-tweet")
      .slideToggle("fast", function() {
        $("#tweet-text").focus();
      });
  });

  // Enter Key submits tweet text
  $("#tweet-text").keypress(function (e) {
    if(e.which == 13 && !e.shiftKey) {        
      $(this).closest("form").submit();
        e.preventDefault();
    }
  });

});
