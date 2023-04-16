const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));


const data = [
    {id : 1, name : "iphone 14", price : 3000, imageUrl : "../public/images/1.jpg"},
    {id : 2, name : "Samsung s22", price : 2000, imageUrl : "../public/images/2.jpg"},
    {id : 3, name : "iphone 11", price : 1000, imageUrl : "../public/images/3.jpg"}
];

app.use("/products/:id", (req, res) => {
    const item = data.find(p => p.id == req.params.id);
    res.render("productDetail", item);
});
app.use("/products", (req, res) => {
    res.render("products", {data : data});
});

app.use("/", (req, res) => {
	res.render("index");
});


app.listen(3000, () => {
    console.log("Listening to port 3000");
});