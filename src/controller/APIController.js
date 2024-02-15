import pool from '../configs/connectDB.js';

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `user`');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing requirement params'
        })
    }

    await pool.execute('insert into user (firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);

    return res.status(200).json({
        message: 'ok',
    })

}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing requirement params'
        })
    }

    await pool.execute(`UPDATE user
                        SET firstName = ?, lastName = ?, email = ?, address = ?
                        WHERE id = ?;`, [firstName, lastName, email, address, id]);
    return res.status(200).json({
        message: 'ok',
    })
}

let deleteUser = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            message: 'missing requirement params'
        })
    }

    await pool.execute('DELETE FROM user WHERE id = ?', [id]);
    return res.status(200).json({
        message: 'ok',
    })
}

export default {
    getAllUsers, createNewUser, updateUser, deleteUser
};