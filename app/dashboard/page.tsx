import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import React from 'react'
import { logoutAction } from '@/app/login/actions/logout.action'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Dashboardpage = async () => {
  const session = await getSession()
  if(!session?.token){
    redirect("/login")
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-amber-50">
      <h1 className="text-4xl font-bold ">
        {" "}
        Hello {session?.firstName || "Guest"}{" "}
      </h1>
      <p className="text-lg text-gray-500">Welcome to the dashboard</p>
      <Image
        src={session?.image || "https://dumyjson.com/image/i8x-3j7gq.jpg"}
        alt="profile"
        width={100}
        height={100}
        className="rounded-full"
      />

      <Button onClick={logoutAction} type="submit">
        Logout
      </Button>
    </div>
  );
}

export default Dashboardpage
