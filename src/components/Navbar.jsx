import { PhoneCallIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=" bg-slate-50">
      <div className="mx-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto py-4  transition-all">
            <Link href="/" className="text-3xl font-medium text-slate-700 border border-slate-400 py-1 px-8 rounded-2xl">
              Dr.Sharmin
            </Link>

              {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600 border border-slate-400 py-2 px-8 rounded-2xl">
              <Link className='text-4 text-slate-600 font-bold capitalize' to='/'>Home</Link>
              <Link className='text-4 text-slate-600 font-bold capitalize' to="/about">About</Link>
              <Link className='text-4 text-slate-600 font-bold capitalize' to="/service">Service</Link>
            </div>
            <button className=" text-4 flex items-center gap-2 px-7 py-2 bg-green-500 hover:bg-green-600 text-sm transition text-white rounded-full">
              <PhoneCallIcon size={18} />
                Contact
            </button>
          </div>
      </div>
    </nav>
  )
}

export default Navbar