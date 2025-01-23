import type { Session } from '@supabase/supabase-js'
import { supabase } from '../core'

export const getSession = async (): Promise<Session> => {
  const { data, error } = await supabase.auth.getSession()

  if (error || !data.session) {
    throw new Error(error?.message || 'No session signed in')
  }

  return data.session
}

export const signInAnon = async (): Promise<Session> => {
  const { data, error } = await supabase.auth.signInAnonymously()

  if (error || !data.session) {
    throw new Error(error?.message || 'No session signed in')
  }

  return data.session
}
