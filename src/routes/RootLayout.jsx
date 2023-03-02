import React from 'react'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden text-base text-stone-300">
      <div className="max-w-screen-xl mx-auto text-center relative">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout