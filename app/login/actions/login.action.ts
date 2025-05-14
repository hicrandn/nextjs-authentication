"use server"

import { getSession } from "@/lib/session"
import { loginSchema } from "@/lib/validation"
import { z } from "zod"

export const loginAction = async (formData: z.infer<typeof loginSchema>) => {
    console.log("login action")
 const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (!res.ok) {
      const errorData = await res.json()
      console.error("Login error from DummyJSON:", errorData)
      return {
        success: false,}
    }

    const data = await res.json()
    console.log("Login successful:", data)
    const session = await getSession()
    session.token = data.accessToken
    session.firstName = data.firstName
    session.lastName = data.lastName
    session.image = data.image
    await session.save()
    return {
      success: true,
    }

}