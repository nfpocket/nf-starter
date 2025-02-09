<template>
  <div>
    <UButton
      :label="`Count: ${count}`"
      @click="count++"
    />
  </div>
</template>

<script setup lang="ts">
const count = ref(0);
</script>
