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
import { loginSchema } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"





const LoginPage = () => {

    const router = useRouter();
    const [error, setError] = useState("")

   function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values)
      }
    

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 p-4 " >
      <div className="flex flex-col items-center justify-center w-full max-w-md px-8 pt-6 pb-8 bg-white rounded-lg shadow-md ">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-sm text-gray-500 p-4">Please enter your credentials</p>
        {error && (
          <div className="mb-4 text-red-500">
            {error}
          </div>
        )}
     
   
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit">Login</Button>
        <Link href="/register" className="text-sm font-bold inline-block align-baseline text-blue-500 ">
          Register
        </Link>
        </div>
        
      </form>
    </Form>
  
  </div>
    </div>
    )

}

export default LoginPage
