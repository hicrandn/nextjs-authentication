
import { cookies } from "next/headers"
import { getIronSession, IronSession } from "iron-session"
import type { SessionOptions } from "iron-session"

export type User = {
  id?: number
  username?: string
  token?: string
}

export const sessionOptions: SessionOptions = {
  cookieName: "myapp_session",
  password: process.env.SESSION_SECRET as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  },
}

export async function getSession(): Promise<IronSession<User>> {
  const cookieStore = await cookies()
  return await getIronSession<User>(cookieStore, sessionOptions)
}
