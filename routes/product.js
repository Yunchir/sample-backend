// pro req orj irn

import express from "express";
import { createSample } from "../server/pro-services.js";

const Router = express.Router();
// let products = [];

Router.get("/products", async (req, res) => {
  const data = await createSample();
  res.status(200).json(data);
  console.log(data);
  return data;
});

// Router.post("/products", (req, res) => {
//   products.push(req.body);
//   req.body.id = products.length;
//   res.status(200).send(products);
// });

// Router.delete("/products", (req, res) => {
//   products.pop();
//   res.status(200).send(products);
// });

export default Router;
