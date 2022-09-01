const router = require("express").Router();
const formidable = require('express-formidable')
const { create, students, image, deleteStudent } = require("../controllers/student");
const verifiedToken = require("./verifiyToken");


router.post("/create-student", formidable() ,create);
router.get("/students/image/:studentId", image);
// router.post("/login", login);
router.get('/students', verifiedToken, students)
router.delete("/delete-student/:studentId", verifiedToken, deleteStudent);


module.exports = router;
