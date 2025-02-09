import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./server/db/schemas",
  out: "./server/db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: "./server/db/db.sqlite",
  },
});
