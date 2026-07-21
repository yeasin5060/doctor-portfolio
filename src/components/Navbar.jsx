import { PhoneCallIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-slate-50">
      <div className="mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-medium text-slate-700 border border-slate-400 py-1 px-8 rounded-2xl"
          >
            ডা. শারমিন
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600 border border-slate-400 py-2 px-8 rounded-2xl">
            <Link className="font-semibold" to="/">
              হোম
            </Link>

            <Link className="font-semibold" to="/about">
              আমার সম্পর্কে
            </Link>

            <Link className="font-semibold" to="/service">
              সেবাসমূহ
            </Link>
          </div>

          {/* Contact Button */}
          <button className="flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-full">
            <PhoneCallIcon size={18} />
            যোগাযোগ করুন
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar