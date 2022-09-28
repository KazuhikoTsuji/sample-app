const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

const orders = require("../data/orders.json").orders;
const products = require("../data/products.json").products;

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/service/products", (req, res) => res.json(products));

app.get("/service/products/:id", (req, res) =>
  res.json(products.find((product) => product.id === req.params.id))
);

app.get("/service/orders", (req, res) => res.json(orders));

app.get("/service/orders/:id", (req, res) =>
  res.json(orders.find((order) => order.id === req.params.id))
);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => console.log(`Fancystor listening on port ${port}!`));
