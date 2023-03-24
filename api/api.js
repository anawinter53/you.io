const express = require('express');
const cors = require('cors');

const diaryRouter = require('./routers/diary.js');

const api = express();

api.use(cors());
api.use(express.json());

api.use('/diary', diaryRouter)

api.get("/", (req, res) => {
    res.json({
        title: "Hello...You",
        description: "Prepare to meet your baker."
    })
})

module.exports = api;
