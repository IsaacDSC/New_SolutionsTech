require('dotenv').config()
import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'db',
    port: 3306,
    database: 'solutions',
    user: 'dev',
    password: 'secret',
})


export default db
