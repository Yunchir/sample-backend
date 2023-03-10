import Router from "./routes/product.js";

import express from "express";
import cors from "cors";

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(Router);
app.listen(port, () => {
  console.log("listening on port", port);
});
