
         var request = require("request");
             var movies = process.argv[2];
                var queryUrl= "http://www.omdbapi.com/?t=" + movies + "&y=&plot=short&apikey=trilogy";
                      console.log(queryUrl);
                         request(queryUrl, function(error, response, body) {
                                if (!error && response.statusCode === 200) {
        
                             console.log("Movie Title: " + JSON.parse(body).Title);
                            console.log("Release Year: " + JSON.parse(body).Year);
                        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[0].Value);
                 console.log("Country of Production: " + JSON.parse(body).Country);
             console.log("Plot: " + JSON.parse(body).Plot);
         console.log("Actors: " + JSON.parse(body).Actors);
            }
        });
        if(movies === "Mr. Nobody"){
            console.log("-----------------------");
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");
        }