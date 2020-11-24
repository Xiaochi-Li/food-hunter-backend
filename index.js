const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/lists", (req, res) => {
    res.send([{ a: "noodle" }, { a: "chicken" }]);
});

app.get("/api/list/:index", (req, res) => {
    const list = [{ a: "noodle" }, { a: "chicken" }];
    res.send(list[req.params.index])
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on oprt ${port}...`));
