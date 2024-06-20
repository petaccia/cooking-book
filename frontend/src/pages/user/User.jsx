import React from 'react'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Outlet />
    </div>
  )
}

export default User