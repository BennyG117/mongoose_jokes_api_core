//controller is our logic*

//!SOMETHING WRONG HERE?
const Jokes = require("../models/joke.model");

module.exports = {
  hello: (req, res) => {
    res.json({ message: "Hello World" });
  },

  //!ERROR HERE ("funny" acting as a placeholder)*
  //returns a list of all jokes
  getAllJokes: (req, res) => {
    Jokes
      .find()
      .then((funny) => {
        res.json({ funny });
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },

  //!ERROR HERE
  //returns one joke with a matching :id
  getOneJoke: (req, res) => {
    Jokes
      .findOne({ _id: req.params.id })
      .then((postAddJoke) => {
        res.json(postAddJoke);
      })
      .catch((err) => {
        console.log("getOneJoke Error", err);
        //DO NOT USE - console.res.json(err);
        res.json(err);
      });
  },

  //!ERROR HERE
  //Adds a new joke to the DB
  postAddJoke: (req, res) => {
    Jokes
      .create(req.body)
      .then((postAddJoke) => {
        res.json(postAddJoke);
      })
      .catch((err) => {
        console.log("postAddJoke Error", err);
        //DO NOT USE - console.res.json(err);
        res.json(err);
      });
  },

  //!ERROR HERE
  //Partially updates an existing joke with a matching id
  patchUpdateJoke: (req, res) => {
    Jokes
      .findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      })
      .then((funny) => {
        res.json(funny);
      })
      .catch((err) => {
        // console.log("patchUpdateJoke Error", err);
        res?.json(err?.errors?.message || err);
      });
  },

  //TODO: similar to get one, just using delete, then confirm how to match with specific id
  //Deletes a joke with a matching id
  deleteOneJoke: (req, res) => {
    Jokes
      .deleteOne({ _id: req.params.id })
      .then((funny) => {
        res.json(funny);
      })
      .catch((err) => {
        console.log("deleteOneJoke Error", err);
      });
  },
};
