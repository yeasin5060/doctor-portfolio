
import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X , PhoneCallIcon} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-50 sticky top-0 z-50">
      <div className="mx-6">
        <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl lg:text-3xl font-medium text-slate-700 border border-slate-400 py-2 px-6 rounded-2xl"
          >
            ডা. শারমিন
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-slate-600 border border-slate-400 py-2 px-8 rounded-2xl">
            <Link className="font-semibold hover:text-blue-600" to="/">
              হোম
            </Link>

            <Link className="font-semibold hover:text-blue-600" to="/about">
              আমার সম্পর্কে
            </Link>

            <Link className="font-semibold hover:text-blue-600" to="/service">
              সেবাসমূহ
            </Link>
          </div>

          {/* Contact Button */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 2650,
                behavior: "smooth",
              })
            }
            className="hidden lg:flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
          >
            <PhoneCallIcon size={18} />
            যোগাযোগ করুন
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-5">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="font-semibold"
            >
              🏠 হোম
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="font-semibold"
            >
              👩‍⚕️ আমার সম্পর্কে জানুন
            </Link>

            <Link
              to="/service"
              onClick={() => setMenuOpen(false)}
              className="font-semibold"
            >
              🩺 সেবাসমূহ
            </Link>

            <button
              onClick={() => {
                window.scrollTo({
                  top: 2650,
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-full"
            >
              <PhoneCallIcon size={18} />
              যোগাযোগ করুন
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar