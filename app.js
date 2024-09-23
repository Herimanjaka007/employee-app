import express from "express";

import indexRouter from "./routers/indexRouter.js";
import employeeRouter from "./routers/employeeRouteer.js";
import departmentRouter from "./routers/departmentRouter.js";

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/employee", employeeRouter);
app.use("/department", departmentRouter);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server listen at port: ${PORT}`));