import { watchEffect } from 'vue'
import { getSession, signInAnon } from '@/services/supabase'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'

const SESSION_KEY = ['session']

export const useGetSession = () => {
  return useQuery({
    queryKey: SESSION_KEY,
    queryFn: getSession,
  })
}

export const useAnonSignIn = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: signInAnon,
    async onSuccess(data) {
      await queryClient.cancelQueries({ queryKey: SESSION_KEY })
      queryClient.setQueryData(SESSION_KEY, data)
    },
  })
}

export const useAutoAnonSignIn = () => {
  const { data: session, isFetched, isError } = useGetSession()
  const { mutateAsync: anonSignIn } = useAnonSignIn()

  watchEffect(async () => {
    if (isFetched.value && isError.value) {
      await anonSignIn()
    }
  })

  return session
}
