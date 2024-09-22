import express from "express";

import indexRouter from "./routers/indexRouter.js";
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", indexRouter);
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server listen at port: ${PORT}`));