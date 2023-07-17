const express = require("express");
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  getAstudent,
  updateAstudent,
  deleteAstudent,
} = require("../controllers/studentController");

router.post("/", createStudent);
router.get("/", getAllStudents);
router.get("/:id", getAstudent);
router.patch("/:id", updateAstudent);
router.delete("/:id", deleteAstudent);

module.exports = router;
