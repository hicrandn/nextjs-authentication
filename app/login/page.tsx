"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginAction } from "./actions/login.action";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setError("");
    try {
      const response = await loginAction(values);
      if (response.accessToken) {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-8 pt-8 pb-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-sm border border-stone-200">
        <h1 className="text-3xl font-bold text-stone-800 mb-2">Welcome Back</h1>
        <p className="text-sm text-stone-600 mb-6">
          Please enter your credentials to continue
        </p>
        {error && (
          <div className="w-full p-3 mb-4 text-sm text-red-500 bg-red-50/50 rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-stone-700">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="johnDoe" {...field} />
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
                  <FormLabel className="text-stone-700">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-700"
                        tabIndex={-1}
                      >
                        {showPassword ? (
                          <EyeOffIcon className="w-5 h-5" />
                        ) : (
                          <EyeIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col items-center">
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
