const router = require("express").Router();
const { create } = require("../controllers/student");
const formidable = require('express-formidable')

router.post("/create-student", formidable() ,create);
// router.post("/login", login);

module.exports = router;
