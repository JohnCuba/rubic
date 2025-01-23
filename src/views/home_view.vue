<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCreateRoom } from '@/domain/room'
import { useGetSession } from '@/domain/auth'

const router = useRouter()
const { data: session } = useGetSession()
const { mutateAsync } = useCreateRoom()

const handleClickCreateRoom = () => {
  if (!session.value) return

  mutateAsync({
    name: 'bubbu',
  }).then((data) => router.push({ name: 'room', params: { id: data.id } }))
}
</script>

<template>
  <button type="button" class="nes-btn is-primary" @click="handleClickCreateRoom">
    create room
  </button>
  <button type="button" class="nes-btn is-primary">join room</button>
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
