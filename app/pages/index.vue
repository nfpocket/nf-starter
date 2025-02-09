<template>
  <UContainer class="flex flex-col gap-4">
    <UCard>
      <template #header>Add user</template>
      <div class="flex flex-col gap-2">
        <UInput
          v-model="name"
          placeholder="Name"
        />
        <UButton
          label="Add user"
          @click="handleAddUser"
        />
      </div>
    </UCard>

    <UCard>
      <template #header>Users</template>
      <div class="flex flex-col gap-2">
        <div
          v-for="user in users"
          :key="user.id"
        >
          {{ user.name }}
        </div>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const { data: users, refresh } = useFetch("/api/users/list");

const name = ref<string>("");

const handleAddUser = async () => {
  await $fetch("/api/users/create", {
    method: "POST",
    body: {
      name: name.value,
    },
  });

  refresh();
};
</script>
