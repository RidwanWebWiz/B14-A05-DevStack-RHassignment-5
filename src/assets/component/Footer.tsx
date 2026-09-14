function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-white pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          
          <div className="space-y-4">
            <img
              className="h-7 w-auto"
              src="/asset_pic/logo-text.png"
              alt="DevStack"
            />
            <p className="text-xs text-slate-500 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 text-xs font-semibold text-slate-600 pt-2">
              <a href="" className="hover:text-pink-600 transition-colors">GitHub</a>
              <a href="" className="hover:text-pink-600 transition-colors">Twitter</a>
              <a href="" className="hover:text-pink-600 transition-colors">LinkedIn</a>
            </div>
          </div>

          
          <div className="space-y-3">
            <h6 className="text-xs font-bold tracking-wider text-slate-900 uppercase">PRODUCT</h6>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="" className="hover:text-pink-600 transition-colors">Home</a></li>
              <li><a href="" className="hover:text-pink-600 transition-colors">Technologies</a></li>
              <li><a href="" className="hover:text-pink-600 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h6 className="text-xs font-bold tracking-wider text-slate-900 uppercase">COMPANY</h6>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="" className="hover:text-pink-600 transition-colors">About</a></li>
              <li><a href="" className="hover:text-pink-600 transition-colors">Contact</a></li>
              <li><a href="" className="hover:text-pink-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h6 className="text-xs font-bold tracking-wider text-slate-900 uppercase">LEGAL</h6>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
              <li><a href="" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="" className="hover:text-pink-500 transition-colors">Privacy</a>
            <a href="" className="hover:text-pink-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer