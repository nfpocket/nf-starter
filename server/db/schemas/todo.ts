import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { user } from "./user";
import { generateRandomString } from "better-auth/crypto";

export const todo = sqliteTable("todo", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => generateRandomString(16)),
  title: text("title").notNull(),
  content: text("content"),
  completed: integer("completed").notNull().default(0),

  ownerId: text("owner_id")
    .notNull()
    .references(() => user.id),

  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date())
    .$type<Date>(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date())
    .$onUpdateFn(() => new Date())
    .$type<Date>(),
});

export type Todo = typeof todo.$inferSelect;
export type TodoInsert = typeof todo.$inferInsert;
