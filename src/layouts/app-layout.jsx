import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
        <main className='min-h-screen container'>
            <Header />
            <Outlet />
        </main>
        <div className='p-10 bg-gray-800 mt-10 text-center'>
          Made with love 💗 by Goutham808
        </div>
    </div>
  )
}

export default AppLayout