const jokesController = require("../controllers/joke.controller");

//"app" refers to express in general
module.exports = (app) => {
  //tbd examples:  app.get("/api", userController.hello);.....
  app.get("/api", jokesController.hello);

  app.get("/api/jokes", jokesController.getAllJokes);

  app.get("/api/jokes/:id", jokesController.getOneJoke);

  app.post("/api/jokes", jokesController.postAddJoke);

  app.patch("/api/jokes/:id", jokesController.patchUpdateJoke);

  app.delete("/api/jokes/:id", jokesController.deleteOneJoke);
};
