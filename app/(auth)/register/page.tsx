"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registerSchema } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"





const RegisterPage = () => {

    const router = useRouter();
    const [error, setError] = useState("")

   function onSubmit(values: z.infer<typeof registerSchema>) {
        console.log(values)
      }
    

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
          email: "",
            firstName: "",
            lastName: "",
          password: "",
        },
      })


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-50 " >
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-white rounded-lg shadow-md ">
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="text-sm text-gray-500 p-2">Please enter your credentials</p>
        {error && (
          <div className="mb-4 text-red-500">
            {error}
          </div>
        )}
     
   
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

        <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Hicran " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Apaydın" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="dareyn@expample.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="dareyn.@" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center justify-between">
        <Button type="submit">Register</Button>
        <Link href="/login" className="text-sm font-bold inline-block align-baseline text-blue-500 ">
         Login
        </Link>
        </div>
        
      </form>
    </Form>
  
  </div>
    </div>
    )

}

export default RegisterPage

