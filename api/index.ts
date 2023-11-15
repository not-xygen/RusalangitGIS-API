import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import { routes } from "./routes";
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  session({
    secret: "API!23", // Change this to a strong secret
    resave: false,
    saveUninitialized: true,
  }),
);

app.listen(3000, () => {
  routes(app);
  console.log(`⚡️[server]: Server is running`);
});
