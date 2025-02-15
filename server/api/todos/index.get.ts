import { db } from "~~/server/db";
import { todo } from "~~/server/db/schemas/todo";
import { defineEventHandlerWithAuth } from "~~/server/utils/auth/event-handler";

export default defineEventHandlerWithAuth(async (event, session) => {
  return db.select().from(todo).all();
});
