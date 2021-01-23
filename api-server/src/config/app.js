import dotenv from "dotenv";
import path from "path";

const root = path.join.bind(this, __dirname, "../../");
dotenv.config({ path: root(".env") });


const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

export default {
  host: process.env.HOST,
  port: process.env.PORT || 5000,
  frontendHost: process.env.FRONTEND_HOST,
  mongoUri: process.env.MONGO_URI,
  isDev,
  isProd
};
