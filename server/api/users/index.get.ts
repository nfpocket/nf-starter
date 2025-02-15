import { db } from "~~/server/db";
import { user } from "~~/server/db/schemas/user";
import { defineEventHandlerWithAuth } from "~~/server/utils/auth/event-handler";

export default defineEventHandlerWithAuth(async (event, session) => {
  return db.select().from(user).all();
});
