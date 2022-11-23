const express = require("express");
const {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent,
  getStudentById,
  updateStudent,
  getStudentByBatchAndSection,
} = require("../controllers/student");
const router = express.Router();

router.get("/students", getStudents);
router.get("/student/:batch/:faculty/:section/:id", getStudentById);
router.get(
  "/students/:batch/:faculty/:section/:page",
  getStudentByBatchAndSection
);
router.get("/students/:id", getStudent);
router.post("/student", createStudent);
router.put("/student/:id", updateStudent);
// router.put('/student/:id',updateStudent);
router.delete("/student/:id", deleteStudent);

module.exports = router;
