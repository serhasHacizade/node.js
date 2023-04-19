const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));


const data = [
    {
        id: 1,
        name: "iphone 14", 
        price: 3000, 
        imageUrl: "https://www.teknotec.com.tr/image/cache/catalog/urunler/apple/iphone-14-128-gb/kirmizi/iphone-14-kirmizi-min-1000x1000.png"
    },
    { id: 2, name: "Samsung s22", price: 2000, imageUrl: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/132360-5_large.jpg" },
    { id: 3, name: "iphone 11", price: 1000, imageUrl: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1-1_large.jpg" }
];

app.use("/products/:id", (req, res) => {
    const item = data.find(p => p.id == req.params.id);
    res.render("productDetail", item);
});
app.use("/products", (req, res) => {
    res.render("products", { data: data });
});

app.use("/", (req, res) => {
    res.render("index");
});


app.listen(3000, () => {
    console.log("Listening to port 3000");
});