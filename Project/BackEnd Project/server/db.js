const { Pool } = require("pg");

const pool = new Pool({

    user: "postgres",
    host: "localhost",
    database: "namesdb",
    password: "password",
    port: 5432

});

module.exports = pool;