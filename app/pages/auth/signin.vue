<template>
  <UCard class="max-w-sm">
    <template #header>
      <div>
        <h1 class="text-2xl">Sign in</h1>
        <span>Enter your information sign in </span>
      </div>
    </template>
    <div class="flex flex-col gap-2">
      <UFormGroup label="Email">
        <UInput
          :loading
          v-model="email"
          placeholder="Email"
        />
      </UFormGroup>

      <UFormGroup label="Password">
        <UInput
          :loading
          v-model="password"
          placeholder="Password"
          type="password"
        />
      </UFormGroup>

      <UButton
        :loading
        :disabled="!isFormValid"
        label="Sign in"
        @click="handleSignIn"
      />
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { authClient } from "~/utils/auth/client";

const loading = ref<boolean>(false);

const email = ref<string>("");
const password = ref<string>("");

const isFormValid = computed(() => {
  return email.value && password.value;
});

const handleSignIn = async () => {
  loading.value = true;
  const { error } = await authClient.signIn.email({
    email: email.value, // user email address
    password: password.value, // user password -> min 8 characters by default
  });
  loading.value = false;

  if (error) {
    useToast().add({
      color: "red",
      title: "Error",
      description: error.message,
    });
    return;
  }

  navigateTo("/dashboard");
};
</script>
