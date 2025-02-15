<template>
  <main class="max-h-screen flex flex-col">
    <NavBar />

    <div class="p-4 flex flex-col overflow-auto">
      <slot></slot>
    </div>
  </main>
</template>

<script setup lang="ts"></script>
