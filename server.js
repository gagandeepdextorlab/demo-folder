import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import routes from "./routes/routes.js";
dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port http://localhost:${process.env.PORT}`);
}); 