const express = require("express");
const products = require("./data/products");
const app = express();
const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const PORT = 3001;


app.use('/api/products',productRoutes);
app.use('/api/categories',categoryRoutes)


app.listen(PORT, (req, res) => {
  console.log(`server in running on ${PORT}`);
});









