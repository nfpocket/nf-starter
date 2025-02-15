<template>
  <UCard>
    <template #header>
      <div>
        <h1 class="text-2xl">Sign up</h1>
        <span>Enter your information to create an account </span>
      </div>
    </template>
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <UFormGroup
          class="flex-1"
          label="First name"
        >
          <UInput
            :loading
            v-model="firstName"
            placeholder="First name"
          />
        </UFormGroup>
        <UFormGroup
          class="flex-1"
          label="Last name"
        >
          <UInput
            :loading
            v-model="lastName"
            placeholder="Last name"
          />
        </UFormGroup>
      </div>

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

      <UFormGroup label="Confirm password">
        <UInput
          :loading
          v-model="confirmPassword"
          placeholder="Confirm password"
          type="password"
        />
      </UFormGroup>
    </div>

    <template #footer>
      <div class="flex items-center gap-2">
        <UButton
          :loading
          :disabled="!isFormValid"
          label="Sign up"
          @click="handleSignUp"
        />

        <UDivider
          orientation="vertical"
          label="or"
        />

        <UButton
          to="/auth/signin"
          :loading
          label="Sign in instead"
          variant="outline"
        />
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { authClient } from "~/utils/auth/client";

const loading = ref<boolean>(false);

const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");

const passwordsMatch = computed(() => password.value === confirmPassword.value);
const isFormValid = computed(() => {
  return (
    firstName.value &&
    lastName.value &&
    email.value &&
    password.value &&
    confirmPassword.value &&
    passwordsMatch.value
  );
});

const handleSignUp = async () => {
  loading.value = true;
  const { error } = await authClient.signUp.email({
    email: email.value, // user email address
    password: password.value, // user password -> min 8 characters by default
    name: `${firstName.value} ${lastName.value}`, // user name
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
