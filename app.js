import express from "express";
import { body, validationResult } from "express-validator";
import { bookValidator } from "./validators.js";
const app = express();
app.use(express.json());
const books = [
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isbn: 1,
    publishedDate: "2015-02-24",
    price: 500,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to book store Api");
});

app.get("/api/books", (req, res) => {
  res.send(books);
});
app.get("/api/books/:isbn", (req, res) => {
  const booksIsbn = books.find((b) => b.isbn === parseInt(req.params.isbn));
  if (!booksIsbn) {
    return res.status(404).send("The book with given ISBN was not found");
  }
  res.send(booksIsbn);
});

app.post("/api/books", bookValidator, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(404).send("Empty");
  }
  const book = {
    title: req.body.title,
    author: req.body.author,
    isbn: books.length + 1,
    publishedDate: req.body.publishedDate,
    price: req.body.price,
  };
  books.push(book);
  res.send(book);
});

app.put("/api/books/:isbn", (req, res) => {
  const errors = validationResult(req);

  const booksIsbn = books.find((b) => b.isbn === parseInt(req.params.isbn));
  if (!booksIsbn) {
    return res.status(404).send("The book with given ISBN was not found");
  }
  booksIsbn.title = req.body.title;
  booksIsbn.author = req.body.author;
  booksIsbn.publishedDate = req.body.publishedDate;
  booksIsbn.price = req.body.price;
  res.send(booksIsbn);
});

app.delete("/api/books/:isbn", (req, res) => {
  const booksIsbn = books.find((b) => b.isbn === parseInt(req.params.isbn));
  if (!booksIsbn) {
    return res.status(404).send("The book with given ISBN was not found");
  }
  const index = books.indexOf(booksIsbn);
  books.splice(index, 1);
  res.send(booksIsbn);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
