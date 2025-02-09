import { db } from "~~/server/db";
import { user } from "~~/server/db/schemas/user";

export default defineEventHandler(async (event) => {
  return db.select().from(user).all();
});
