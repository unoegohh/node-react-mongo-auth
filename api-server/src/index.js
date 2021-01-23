import mongoose from "mongoose";
import express from "express";
import path from 'path';
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import httpError from "http-errors";
import routes from "./routes";
import errorHandler from "./middleware/ErrorHandler";
import config from "./config/app";

const app = express();

const morganFormat = config.isDev ? "dev" : "combined";
app.use(morgan(morganFormat));

console.log('config.mongoUri',config.mongoUri)
mongoose
  .connect(config.mongoUri, { useNewUrlParser: true,  useUnifiedTopology: true })
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", ...routes);

app.use((req, res, next) => {
  next(httpError(404));
});

app.use(errorHandler);

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname  }/../client/build/index.html`))
});

app.listen(config.port, () => {
  console.log(`Server started ${config.host}:${config.port}`);
});
