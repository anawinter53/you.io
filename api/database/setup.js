require('dotenv').config();
const fs = require('fs');
const db = require('./connect.js');

const sql = fs.readFileSync('./api/database/setup.sql').toString();

db.query(sql)
    .then(data => {
        db.end();
        console.log("Set-up complete.")
    })

    .catch(error => console.log(error));
