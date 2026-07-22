import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, PhoneCallIcon } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContact = () => {
    window.scrollTo({
      top: 2650,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 border border-slate-300 px-6 py-2 rounded-2xl"
        >
          ডা. শারমিন
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 border border-slate-300 rounded-2xl px-8 py-2">
          <Link
            to="/"
            className="font-semibold text-slate-700 hover:text-blue-600 transition"
          >
            হোম
          </Link>

          <Link
            to="/about"
            className="font-semibold text-slate-700 hover:text-blue-600 transition"
          >
            আমার সম্পর্কে
          </Link>

          <Link
            to="/service"
            className="font-semibold text-slate-700 hover:text-blue-600 transition"
          >
            সেবাসমূহ
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <button
          onClick={handleContact}
          className="hidden lg:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full"
        >
          <PhoneCallIcon size={18} />
          যোগাযোগ করুন
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Left Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
          menuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b p-5">

          <h2 className="text-2xl font-bold text-blue-600">
            ডা. শারমিন
          </h2>

          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>

        </div>

        {/* Drawer Menu */}
        <div className="flex flex-col p-6 gap-6">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold text-slate-700 hover:text-blue-600"
          >
            🏠 হোম
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold text-slate-700 hover:text-blue-600"
          >
            👩‍⚕️ আমার সম্পর্কে
          </Link>

          <Link
            to="/service"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold text-slate-700 hover:text-blue-600"
          >
            🩺 সেবাসমূহ
          </Link>

          <button
            onClick={handleContact}
            className="mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl"
          >
            <PhoneCallIcon size={18} />
            যোগাযোগ করুন
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;