function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          className="h-8 w-auto ml-6.5"
          src="/asset_pic/logo-text.png"
          alt="Dev Stack"
        />
      </div>

      <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
        <li>
          <a href="" className="hover:text-pink-600 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="" className="hover:text-pink-600 transition-colors">
            Technologies
          </a>
        </li>
        <li>
          <a href="" className="hover:text-pink-600 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="" className="hover:text-pink-600 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="" className="hover:text-pink-600 transition-colors">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 bg-transparent hover:bg-slate-100 px-5 py-2.5 rounded-full transition-colors hover:-translate-y-0.5">
          Sign In
        </button>
        <button className="bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm transition-all duration-200 hover:-translate-y-0.5">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
