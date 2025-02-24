import React from 'react'
import { Link } from 'react-router'
const NavbarCard = () => {
  return (
    <nav className="  bg-blue-600 text-white p-4 ">
    <div className='container flex justify-between '>
    <h1 className="text-xl font-bold">My App</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Users</Link>
      <Link to="/book-list" className="hover:underline">Albums</Link>
      <Link to="/post" className="hover:underline">Posts</Link>
    </div>
    </div>
  </nav>
  )
}

export default NavbarCard