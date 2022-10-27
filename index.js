const express = require('express');
const app = express()
const port = 5000;
const cors = require('cors')
app.use(cors())

const category = require('./data/category.json');
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send("Hurraa! This code is running")
})

app.get('/categories', (req, res) => {
    res.send(category)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})


app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const getCategory = courses.find(c => c._id == id);
    res.send(getCategory)
})


app.listen(port, () => {
    console.log(`deep-coder-knowledge server is running at: ${port}`);
})