/**
 * @description Generates an API request for a random movie quote. 
 * @param {success} callback - Handles the successful andruxnet random famous quotes request result. 
 **/
function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "ettTi6dh1imshZVaMNNhOzSEAZvVp1XULOajsnBSj21244VwvV",
      "Content-Type": "application/x-www-form-urlencoded",
	  Accept: "application/json"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',
    success: function(quoteInfo) {
      var info = JSON.parse(quoteInfo),
      currentQuote = info.quote,
      currentAuthor = info.author;
     
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
     
    $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(info.quote);
        });

    $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(info.author);
        });  
    } // end ajax request success function
  }); // end ajax request function
}

$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
  
});
