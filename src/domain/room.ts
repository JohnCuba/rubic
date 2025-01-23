import type { Ref } from 'vue'
import { createRoom, getRoom } from '@/services/supabase'
import { useMutation, useQuery } from '@tanstack/vue-query'

const ROOM_KEY = ['room']

export const useGetRoom = (id: Ref<string>) => {
  return useQuery({
    queryKey: ROOM_KEY,
    queryFn: () => getRoom(id.value),
  })
}

export const useCreateRoom = () => {
  return useMutation({
    mutationFn: createRoom,
  })
}
