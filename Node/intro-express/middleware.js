const Joi = require("joi");
const logger = require("./logger");
const express = require("express");
const app = express();

app.use(express.json());
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
