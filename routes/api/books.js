const router = require("express").Router();
const bookController = require("../../controllers/bookController");

//Routes for /api/books
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);

//Routes for /api/books/:id
router.route("/:id")
    .get(bookController.findById)
    .delete(bookController.remove);

module.exports = router;