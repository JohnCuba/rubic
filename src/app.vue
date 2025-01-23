<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { useAutoAnonSignIn } from '@/domain/auth'

useAutoAnonSignIn()
</script>

<template>
  <main class="root nes-container is-dark">
    <RouterView />
  </main>
  <VueQueryDevtools />
</template>

<style scoped>
.root {
  min-height: calc(100vh - 0.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
