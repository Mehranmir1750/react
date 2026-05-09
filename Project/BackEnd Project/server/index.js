const express = require("express");
const cors = require("cors");

const app = express();
const pool = require("./db");

app.use(express.json());
app.use(cors());


app.post("/save", async(req, res) => {

    const { name } = req.body;

    console.log(name);
     await pool.query(
        "INSERT INTO users(name) VALUES($1)",
        [name]
    );

res.json({
   message: "Name Received"
});

});


app.listen(5000, () => {
   console.log("Server Running");
});