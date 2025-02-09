import { db } from "~~/server/db";
import { users } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  return db.select().from(users).all();
});
