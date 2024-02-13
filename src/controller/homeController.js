import connection from '../configs/connectDB.js';

let getHomePage = (req, res) => {
    let data = [];
    connection.query(
        'SELECT * FROM `user`',
        function(err, results, fields){
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    firstName: row.firstName,
                    lastName: row.lastName
                })
            });
            return res.render('index.ejs', {dataUser: data});
        }
    );
}

export default { getHomePage };
