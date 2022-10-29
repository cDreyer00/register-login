const express = require("express");
const hostname = "127.0.0.1";
const PORT = 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Server!" })
})

app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`)
})

