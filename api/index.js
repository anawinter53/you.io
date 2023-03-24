require("dotenv").config();

const api = require("./api");

api.listen(process.env.PORT, () => {
    console.log(`API listening on ${process.env.PORT}`);
})
