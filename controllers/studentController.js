const studentModel = require("../models/studentModel");

//create a student
const createStudent = async (req, res) => {
  const { name, age, email, password } = req.body;

  //handling response
  try {
    const create = await studentModel.create({
      name,
      age,
      email,
      password,
    });
    res.status(200).json(create);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

//view all students
const getAllStudents = async (req, res) => {
  try {
    const getAll = await studentModel.find({}).sort({ createAt: -1 });
    res.status(200).json(getAll);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

//view a atudent
const getAstudent = async (req, res) => {
  const { id } = req.params;
  // const ida = req.params.id;
  try {
    const getOne = await studentModel.findById(id);
    res.status(200).json(getOne);
    // console.log(req.params); { id: '64b023863075b60895194dcd' } => id of a collection in the mongo db
    // console.log(id);64b023863075b60895194dcd
    // console.log(ida);64b023863075b60895194dcd
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

//update  a student
const updateAstudent = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  try {
    const update = await studentModel.findByIdAndUpdate(id, {
      email,
      password,
    });
    res.status(200).json({ msg: "Updated" });
  } catch {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

//delete a student
const deleteAstudent = async (req, res) => {
  const { id } = req.params;

  try {
    const remove = await studentModel.findByIdAndDelete(id);
    res.status(200).send({ status: "Student is deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getAstudent,
  updateAstudent,
  deleteAstudent,
};
