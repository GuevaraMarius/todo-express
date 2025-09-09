import app from "./app";
import { sequelize } from "./config/sequelize";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
(async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
})();
