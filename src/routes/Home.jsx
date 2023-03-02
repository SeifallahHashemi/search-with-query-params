import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='mt-32 flex flex-col gap-4'>
        <h1>جستجو</h1>
        <p>با استفاده از react-router-dom v6</p>
        <Link to={'posts'} className={'text-[#f8d351] hover:text-cyan-600'}>رفتن به صفحه پست ها</Link>
    </div>
  )
}

export default Home