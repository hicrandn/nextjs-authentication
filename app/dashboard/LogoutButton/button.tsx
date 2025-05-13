import React from 'react'
import { logoutAction } from '@/app/(auth)/login/actions/logout.action'

const button = () => {
  return (
    <button onClick={logoutAction} type='button' className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>
      Logout
    </button>
  )
}

export default button
