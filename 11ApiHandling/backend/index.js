import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
    let products = [
        {
            id: 1,
            name: "Wireless Headphones",
            category: "Electronics",
            price: 2499,
            inStock: true,
            rating: 4.5
        },
        {
            id: 2,
            name: "Gaming Keyboard",
            category: "Computer Accessories",
            price: 3799,
            inStock: false,
            rating: 4.7
        },
        {
            id: 3,
            name: "Coffee Maker",
            category: "Home Appliances",
            price: 5599,
            inStock: true,
            rating: 4.2
        },
        {
            id: 4,
            name: "Yoga Mat",
            category: "Fitness",
            price: 899,
            inStock: true,
            rating: 4.1
        },
        {
            id: 5,
            name: "Smartwatch",
            category: "Wearables",
            price: 7499,
            inStock: false,
            rating: 4.6
        }
    ];
    if(req.query.search){
        products = products.filter((product)=> product.name.toLowerCase().includes(req.query.search));
    }
    setTimeout(() => {
        res.send(products)
    }, 2000);
});


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log("The server is listening at 5000");
})