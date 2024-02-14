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

let createNewUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;
    await pool.execute('insert into user (firstName, lastName, email, address) values (?, ?, ?, ?)', 
    [firstName, lastName, email, address]);
    return res.redirect('/');
}

export default { getHomePage, getDetailPage, createNewUser};
