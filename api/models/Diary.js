const db = require('../database/connect.js')

class Diary {

    constructor ({ diary_id, diary_date, diary_title, diary_name, diary_entry }) {
        this.id = diary_id;
        this.date = diary_date;
        this.title = diary_title;
        this.name = diary_name;
        this.entry = diary_entry;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diary ORDER BY diary_date;");
        return response.rows.map(g => new Diary(g));
    }

    // static async getRandom () {
    //     const response = await db.query("SELECT RAND(*) FROM diary;")
    // }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM diary WHERE diary_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate diary.");
        }
        return new Diary(response.rows[0]);
    }

    static async create(data) {
        const { diary_date, diary_title, diary_entry } = data;   
        let response = await db.query('INSERT INTO diary (diary_date, diary_title, diary_entry) VALUES ($1, $2, $3) RETURNING *;', [diary_date, diary_title, diary_entry]);

        if (response.rows.length != 1) {
            throw new Error("Could not add death note to the database!")
        }

        return response.rows.map(h => new Diary(h));
    }
}

module.exports = Diary;
