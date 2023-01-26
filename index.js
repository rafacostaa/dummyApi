const express = require("express");
const app = express();
const PORT = 8080;
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
// app.use(express.json());
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.listen(PORT, () => console.log(`API 🟢`));

// app.get("/users", (req, res) => {
//   res.status(200).send(users);
// });

// app.get(`/users/:uid`, (req, res) => {
//   const { uid } = req.params;
//   const findUserById = users.filter((i) => i.id === parseInt(uid));

//   res.status(200).send(findUserById);
// });

// app.get("/products", (req, res) => {
//   res.status(200).send(products);
// });

// app.get(`/products/:uid`, (req, res) => {
//   const { uid } = req.params;
//   const findProductsById = products.filter((i) => i.id === parseInt(uid));

//   res.status(200).send(findProductsById);
// });
