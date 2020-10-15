const router = require ("express").Router();
const controller = require ("../../controller/books")

router.route("/")
.get(books.findAll)
.post(books.create);

router.route("/:id")
.delete(books.delete);


module.exports = router
