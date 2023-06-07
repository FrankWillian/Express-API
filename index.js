const express = require("express")

let books = []

const app = express();

app.use(express.json());

app.listen(3333, () => console.log("Server is runnig"))