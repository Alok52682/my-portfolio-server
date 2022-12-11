const express = require('express');
const cors = require('cors');
const allProjects = require('./AllProjects.json');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/', async (req, res) => {
    res.send('My portfolio server is running');
})
app.get('/projects/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = allProjects.find(project => project.id == id) || {};

    res.send(phone)
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})