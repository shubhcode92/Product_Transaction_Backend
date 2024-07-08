const express = require('express');
const cors = require('cors');

const data = require('./data')

const app = express();

app.use(cors());

app.get('/api/data', (req, res) => {
    res.json(data);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server start on PORT ${PORT}`);
})