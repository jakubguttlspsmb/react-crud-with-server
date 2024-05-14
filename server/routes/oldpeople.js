var express = require("express");
var router = express.Router();

const OldPeopleController = require("../controllers/oldpeople");

router.get("/", OldPeopleController.getAllOldPeople);

//localhost:3000/oldpeople/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", OldPeopleController.getOldPeopleById);

router.delete("/:id", OldPeopleController.deleteOldPeople);

router.put("/:id", OldPeopleController.updateOldPeople);

router.post("/", OldPeopleController.createOldPeople);

module.exports = router;
