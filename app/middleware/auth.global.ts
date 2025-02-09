import { authClient } from "~/utils/auth/client";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data: session } = await authClient.useSession(useFetch);

  if (!session.value) {
    if (to.path === "/dashboard") {
      return navigateTo("/");
    }
  } else {
    if (to.path.startsWith("/auth")) {
      return navigateTo("/dashboard");
    }
  }
});
