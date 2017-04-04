const Twitter = require('twit');
const twitterKeys = new Twitter({
// exports.twitterKeys = {
    consumer_key: 'AyDdgg1e4icYVX2WmDqZdN79E',
    consumer_secret: 'XkWVpARn24xrWngkAj88PVhs7eWPZ6y6O8mz8fl4ZhhykYaEhO',
    access_token: '393776351-hBslR5BzdqZwhKe6vhBX9WGA1OG4PaF9E420Rliv',
    access_token_secret: 'IbKPdrTcDCVJOoUc0U9A2CsZ47clRZgOjDHddbkS6FG0o'
});
// };s
var params = {q: "bitcoin", count: 20};

   if (process.argv[2] === "my-tweets"){
            twitterKeys.get("search/tweets", params,  function(error, tweets, response){
                if(error){
                    console.log(error);
            } else {
                for (var i = 0; i < tweets.statuses.length; i++){
                    console.log(tweets.statuses[i].text + "\n-------------------\n\n");

                }  
            }
        });
   };
exports.twitterKeys = {};



