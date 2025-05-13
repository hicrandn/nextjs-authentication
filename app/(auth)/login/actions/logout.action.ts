"use server"

import { getSession } from "@/lib/session"

export const logoutAction = async () => {
  const session = await getSession()
  //session.token = undefined
  session.destroy()
  await session.save()
  return null
}