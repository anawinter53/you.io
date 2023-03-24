const Diary = require('../models/Diary.js')


async function index (req, res) {
    try {
        const diaries = await Diary.getAll();
        res.status(200).json(diaries);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}


module.exports = {
    index
}
