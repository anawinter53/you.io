const db = require('../database/connect.js')

class Diary {

    constructor ({ diary_id, diary_date, diary_name, diary_entry }) {
        this.id = diary_id;
        this.date = diary_date;
        this.name = diary_name;
        this.entry = diary_entry;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diary ORDER BY diary_date;");
        return response.rows.map(g => new Diary(g));
    }

    

}

module.exports = Diary;
