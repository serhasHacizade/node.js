const express = require("express");
const app = express();

app.use("/products/:id", (req, res) => {
    res.send("Products Details " + req.params.id);
});

app.use("/products", (req, res) => {
	res.send("Products");
});
app.use("/", (req, res) => {
	res.send("Main page");
});


app.listen(3000, () => {
    console.log("Listening to port 3000");
});