const mysql = require('mysql');

exports.query = (sql) => {

    const conn = mysql.createConnection({
        host: 'luis-mysql.c2wlzv3xkye4.us-east-2.rds.amazonaws.com',
        user: 'luis',
        password: 'Luis1234',
        database: 'luis'
    });

    conn.connect();

    return new Promise((resolve, reject) =>{
        conn.query(sql, function (err, rows, fields) {
            if (err) reject (err);
            resolve(rows);
            conn.end();
        });
    });
};
