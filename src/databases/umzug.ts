import { Umzug, SequelizeStorage } from "umzug";
import { sequelize } from "../config/sequelize";

export const setupUUIDExtension = async (): Promise<void> => {
  await sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
};

export const migrator = new Umzug({
  migrations: {
    glob: "src/migrations/*.ts",
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});
