const express = require('express');
const books = require('./data/books.json');
const port = 3000
const app = express()
app.use(express.json())

// console.log(books.filter(book => book.year < 1900)); 

app.get('/all', (req, res) => {
    res.status(200).json(books)
})

app.get('/first', (req, res) => {
    res.status(200).json(books[0])
})

app.get('/last', (req, res) => {
    res.status(200).json(books[99])
})

app.get('/middle', (req, res) => {
    res.status(200).json(books[50])
})

app.get('/author/dante-alighieri', (req, res) => {
    const book = books.find(book => book.author === "Dante Alighieri")
    res.status(200).json(book.title)
})

app.get('/country/charles-dickens', (req, res) => {
    const book2 = books.find(book2 => book2.author === "Charles Dickens")
    res.status(200).json(book2.country)
})

app.get('/year&pages/cervantes', (req, res) => {
    const book3 = books.find(book3 => book3.author === "Miguel de Cervantes")
    res.status(200).json({
        year: book3.year,
        pages: book3.pages
    })
})

app.get('/country/count/spain', (req, res) => {
    const book4 = books.filter(book4 => book4.country === "Spain")
    res.status(200).json(book4.length)
})

app.get("/country/at-least/germany", (req, res) => {
    const book = books.find(book => book.country == "Germany");
    res.status(200).json(book.country.includes("Germany"));
});

app.get("/pages/all-greater/200", (req, res) => {
    const book = books.every(book => book.pages >= 200);
    res.status(200).json(book);
});

app.listen(port, function (err) {
    if (err) console.log(err);
    console.log(`Server listening on http://localhost:${port}`);
})