import { db } from "~~/server/db";
import { users } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { name } = body;

  if (!name) {
    throw createError({
      status: 400,
      message: "Bad Request",
      cause: "Missing required fields",
    });
  }

  return db
    .insert(users)
    .values({
      name,
    })
    .returning()
    .get();
});
