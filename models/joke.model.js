const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
  //N/A - gets auto included: id: {

  // },
  setup: {
    type: String,
    minlength : [10, "Joke setup must be at least 10 characters!"]
  },
  punchline: {
    type: String,
    minlength : [3, "Punchline must be at least 3 characters!"]
  },
});
const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;


//! pre-typed joke examples
/*"setup": "What do you call a well-balanced horse?", "punchline": "Stable" */

/*"setup": "What is 2 + 2?", "punchline": "Fish!" */

/*"setup": "Where do polar bears keep their money?", "punchline": "In a SNOWBANK!" */

/*"setup": "What's a funny setup?", "punchline": "I don't know..." */

/*"setup": "Something super interesting...."" "punchline": "Surprising Answer!!!" */


/* */