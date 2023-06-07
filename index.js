const express = require("express")

let books = []

const app = express();

app.use(express.json());

app.post( "/books", (req, res) => {
    const {id, title, author, publishedAt } = req.body;
    const book = { id, title, author, publishedAt };
    books.push(book);
    return res.status(201).json(book)
});

app.get("/books", (req, res) => {
    const allBooks = books;
    return res.status(200).json(allBooks);
});

app.get("/books/:book_id", (req, res) => {
    const { book_id } = req.params;
    const book = books.find((book) => book.id === book_id);
    if (!book) res.status(404).json("not found")
    return res.status(200).json(book);
});

app.listen(3333, () => console.log("Server is runnig"))