// ...existing code...
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// POST route for registration
app.post("/register", (req, res) => {
    console.log("Received data:", req.body);
    res.send("<h2>Registration successful! Check server console for details.</h2>");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
