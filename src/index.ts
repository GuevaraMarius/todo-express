import * as express from "express";
import { Request, Response } from "express";
import router from "./routes";
import * as cors from "cors";
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
