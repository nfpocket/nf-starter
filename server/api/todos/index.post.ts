import { db } from "~~/server/db";
import { todo } from "~~/server/db/schemas/todo";
import { defineEventHandlerWithAuth } from "~~/server/utils/auth/event-handler";

export default defineEventHandlerWithAuth(async (event, session) => {
  const body = await readBody(event);

  const ownerId = session.user.id;

  return db
    .insert(todo)
    .values({ ...body, ownerId })
    .returning()
    .get();
});
