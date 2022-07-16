import express, { Request, response, Response } from "express";
import router from "./routes/index";

const app = express();
const PORT = 3000;

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});