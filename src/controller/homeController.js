import pool from '../configs/connectDB.js';

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `user`');
    return res.render('index.ejs', { dataUser: rows });
}

let getDetailPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute(`SELECT * FROM user WHERE id = ?`, [id]);

    return res.send(JSON.stringify(user));
}

export default { getHomePage, getDetailPage };
