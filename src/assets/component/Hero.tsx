function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-8 pt-10 pb-10 flex flex-row justify-between items-center">

        {/* Left Column */}
        <div className="w-1/2">
          <h1 className="text-[52px] font-extrabold leading-[1.05] tracking-tight">
            <span className="text-[#0F172A] block whitespace-nowrap">
              Build Your Ideal
            </span>

            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent block whitespace-nowrap">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 text-gray-500 text-base leading-relaxed max-w-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="mt-7 flex items-center gap-4">
  <button className="bg-linear-to-r from-orange-500 via-pink-500 to-pink-600 text-white font-medium px-6 py-3 rounded-lg shadow-xs cursor-pointer hover:opacity-90 hover:scale-105 transition duration-200">
    Explore Technologies
  </button>

  <button className="bg-white border border-gray-200 text-gray-600 font-medium px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-50 hover:scale-105 transition duration-200">
    Learn More
  </button>
</div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex justify-end pr-16">
          <img
            src="/asset_pic/banner-stack.png"
            alt="Development Stack Illustration"
            className="w-330px h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;