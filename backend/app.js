import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { router as userRouter } from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

export const app = express();

app.enable("trust proxy");
app.use(cors());
app.options("*", cors());
app.use(helmet());

// Middlewares
if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use("/api/v.1/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("hello");
});
