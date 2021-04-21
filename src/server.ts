import express, { request, response } from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json())

app.use(routes);

app.get("/", (request, response) => {
  return response.json({
    message: "olá terráqueos",
  });
});

app.listen(3333, () => console.log("server is running on port 3333"));
