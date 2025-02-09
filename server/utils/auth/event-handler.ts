import { auth } from "~~/auth";
import { Session, User } from "~~/server/db/schemas/user";
import { H3Event, EventHandlerRequest } from "h3";

type AuthSession = {
  session: Session;
  user: User;
};

type EventHandlerWithSession<T extends EventHandlerRequest, D> = (event: H3Event<T>, session: AuthSession) => Promise<D>;

export const defineEventHandlerWithAuth = <T extends EventHandlerRequest, D>(handler: EventHandlerWithSession<T, D>) => {
  return defineEventHandler(async (event) => {
    const session = await auth.api.getSession({
      headers: event.headers,
    });

    if (session) {
      return handler(event, session as AuthSession);
    }

    throw createError({
      status: 401,
      message: "Unauthorized",
    });
  });
};
