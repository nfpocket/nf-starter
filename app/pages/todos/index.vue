<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <div>Todos</div>

        <UButton
          label="Add todo"
          icon="i-tabler-plus"
          @click="handleAddTodo"
        />
      </div>
    </template>
    <div v-if="status === 'pending' && !todos?.length">Loading...</div>
    <div v-else-if="status === 'error'">
      {{ error }}
    </div>
    <div v-else-if="!todos?.length">No todos found.</div>
    <div
      v-else
      class="flex flex-col gap-2"
    >
      <UCard
        v-for="todo in todos"
        :key="todo.id"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <div>{{ todo.title }}</div>
            <UCheckbox
              :model-value="!!todo.completed"
              @update:model-value="todo.completed = $event ? 1 : 0"
              @change="handleUpdateTodo(todo as unknown as Todo)"
            />
          </div>
        </template>

        {{ todo.content }}
      </UCard>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { Todo } from "~~/server/db/schemas/todo";

const { data: todos, status, error, refresh } = useFetch("/api/todos");

const handleAddTodo = () => {
  $fetch("/api/todos", {
    method: "POST",
    body: {
      title: "New todo",
      content: "New todo content",
      completed: 0,
    },
  });

  refresh();
};

const handleUpdateTodo = async (todo: Todo) => {
  await $fetch(`/api/todos/${todo.id}`, {
    method: "PUT",
    body: {
      completed: todo.completed,
    },
  });

  refresh();
};
</script>
