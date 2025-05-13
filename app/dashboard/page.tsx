import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import React from 'react'
import LogoutButton from './LogoutButton/button'

const Dashboardpage = async () => {
  const session = await getSession()
  console.log({session})
  if(!session?.token){
    redirect("/login")
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4 bg-amber-50'>

      <h1 className='text-4xl font-bold '> Hello  </h1>

      <LogoutButton></LogoutButton>
      

     
    </div>
  )
}

export default Dashboardpage
