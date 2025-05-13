import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";
import { logoutAction } from "@/app/login/actions/logout.action";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Dashboardpage = async () => {
  const session = await getSession();
  if (!session?.token) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md w-full space-y-6 border border-stone-200">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={session?.image || "https://dumyjson.com/image/i8x-3j7gq.jpg"}
            alt="profile"
            width={100}
            height={100}
            className="rounded-full border-4 border-stone-200 shadow-lg"
          />
          <h1 className="text-3xl font-bold text-stone-800">
            Hello {session?.firstName || "Guest"}
          </h1>
          <p className="text-lg text-stone-600">Welcome to the dashboard</p>
        </div>

        <Button onClick={logoutAction} type="submit" className="w-full ">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Dashboardpage;
