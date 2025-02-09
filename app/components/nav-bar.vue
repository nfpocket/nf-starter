<template>
  <UHorizontalNavigation
    :links
    class="border-b border-gray-200 dark:border-gray-800"
  />
</template>

<script setup lang="ts">
import { authClient } from "~/utils/auth/client";
import type { HorizontalNavigationLink } from "#ui/types";

const { data: session } = await authClient.useSession(useFetch);

const links = computed(() => {
  const navLinks: HorizontalNavigationLink[] = [
    {
      label: "Home",
      icon: "i-heroicons-home",
      to: "/",
    },
  ];

  if (session.value?.user) {
    navLinks.push(
      ...[
        {
          label: "Dashboard",
          icon: "i-heroicons-chart-bar",
          to: "/dashboard",
        },
        {
          label: "Sign out",
          click: async () => {
            await authClient.signOut();
            navigateTo("/");
          },
        } as HorizontalNavigationLink,
      ]
    );
  } else {
    navLinks.push({
      label: "Sign in",
      icon: "i-heroicons-command-line",
      to: "/auth/signin",
    });
  }

  return navLinks;
});
</script>
