
import {z} from "zod"


export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
})
//emilys
// emilyspass

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(2, {
        message: "email must be at least 2 characters.",
      })
      .max(20, {
        message: "email must be at most 20 characters.",
      }),
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .max(100, {
        message: "Password must be at most 100 characters.",
      }),
      firstName: z
      .string()
      .min(2, {
        message: "firstName must be at least 2 characters.",    
      })
      .max(20, {
        message: "firstName must be at most 20 characters.",
      }),
      lastName: z
      .string()
      .min(2, {
        message: "lastName must be at least 2 characters.",   
      })
      .max(20, {
        message: "lastName must be at most 20 characters.",
      }),                


    })