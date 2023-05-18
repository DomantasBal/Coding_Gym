const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.bodu);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  // Look up the course
  // if not existing return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("the course id is invalid");

  const { error } = validateCourse(req.body); // result.error
  if (error) {
    // 400 bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }

  //update course
  course.name = req.body.name;
  res.send(course);
  //return the updated course
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("the course with id not found");
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
