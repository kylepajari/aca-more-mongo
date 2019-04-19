const express = require("express");
const router = express.Router();
const TicketsController = require("../controllers/tickets");

// Create a route for getting all movies/tickets from the db
// This corresponds to item 1 in the controller
router.get("/", (request, response) => {
  TicketsController.getAll().then(results => response.json(results));
});

// Create a route for creating a movie
// This corresponds to item 2 in the controller
router.post("/", (request, response) => {
  TicketsController.createMovie(request.body).then(results =>
    response.json(results)
  );
});

// Create a route for deleting ONE movie by it's name
// This corresponds to item 3 in the controller
router.delete("/:movieName", (request, response) => {
  TicketsController.deleteMovie(request.params.movieName).then(results =>
    response.json(results)
  );
});

// Create a route for getting ONE movie by it's id
// This corresponds to item 4 in the controller
router.get("/:id", (request, response) => {
  TicketsController.getById(request.params.id)
    .then(result => response.json(result))
    .catch(err => response.status(404).send(err.message));
});

module.exports = router;
