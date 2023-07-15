//controller is our logic*

const Jokes = require("../models/joke.model");

module.exports = {
  hello: (req, res) => {
    res.json({ message: "Hello World" });
  },

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

  // Adds a new joke to the DB
  postAddJoke: (req, res) => {
    // console.log(req.body);
    Jokes
      .create(req.body)
      .then((funny) => {
        res.json(funny);
      })
      .catch((err) => {
        console.log("postAddJoke Error", err);
        //DO NOT USE - console.res.json(err);
        res.json(err);
      });
  },


  //Partially updates an existing joke with a matching id
  patchUpdateJoke: (req, res) => {
    // console.log(req.body);
    Jokes
      .findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true
      })
      .then((updatedFunny) => {
        res.json({updatedFunny});
      })
      .catch((err) => {
        console.log("patchUpdateJoke Error", err);
        //DO NOT USE - console.res.json(err);
        res.json(err);
        // // console.log("patchUpdateJoke Error", err);
        // res?.json(err?.errors?.message || err);
      });
  },

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
