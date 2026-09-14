function Hero() {
  return (
    <section className="w-full bg-linear-to-b from-slate-50/50 to-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="flex-1 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Build Your Ideal <br />

            <span className="block sm:inline-block whitespace-nowrap bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-slate-500 text-base md:text-lg max-w-xl leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <button className="bg-linear-to-r from-orange-500 via-pink-500 to-pink-600 hover:opacity-95 text-white font-semibold px-6 py-3 rounded-lg shadow-sm hover:-translate-y-0.5 transition duration-200">
              Explore Technologies
            </button>
            <button className="bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition duration-200">
              Learn More
            </button>
          </div>
        </div>


        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/asset_pic/banner-stack.png"
            alt="Development Stack Illustration"
            className="w-full max-w-md h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;