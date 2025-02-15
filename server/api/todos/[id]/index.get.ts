import { eq } from "drizzle-orm";
import { db } from "~~/server/db";
import { todo } from "~~/server/db/schemas/todo";
import { defineEventHandlerWithAuth } from "~~/server/utils/auth/event-handler";

export default defineEventHandlerWithAuth(async (event, _session) => {
  const { id } = getRouterParams(event);

  return db.select().from(todo).where(eq(todo.id, id)).get();
});
