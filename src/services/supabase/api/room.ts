import { supabase, type Room } from '../core'

const ROOM_SCHEME = 'room'

export const createRoom = async (value: Omit<Room, 'id' | 'created_at'>): Promise<Room> => {
  const { data } = await supabase.from(ROOM_SCHEME).insert(value).throwOnError()

  return data[0]
}

export const getRoom = async (id: Room['id']): Promise<Room> => {
  const { data } = await supabase
    .from(ROOM_SCHEME)
    .select()
    .eq(ROOM_SCHEME + '.id', id)
    .throwOnError()

  return data[0]
}
