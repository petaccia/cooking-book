import React from 'react'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className="w-full  flex justify-center items-center">
      <Outlet />
    </div>
  )
}

export default User