<template>
  <UCard>
    <template #header>Users</template>
    <div v-if="status === 'pending'">Loading...</div>
    <div v-else-if="status === 'error'">
      {{ error }}
    </div>
    <div
      v-else
      class="flex flex-col gap-2"
    >
      <div
        v-for="user in users"
        :key="user.id"
      >
        {{ user.name }}
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const { data: users, status, error } = useFetch("/api/users");
</script>
