import { user, account, session, verification } from "./schemas/user";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { todo } from "./schemas/todo";

const sqlite = new Database("./server/db/db.sqlite");
export const db = drizzle(sqlite, {
  schema: {
    user,
    account,
    session,
    verification,
    todo,
  },
});
