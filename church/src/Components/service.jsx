function Service() {
  return (
    <div className="relative h-48 w-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-center text-white">
      {/* Optional Overlay for Darker Effect */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold">SUNDAY SERVICE</h1>
        <p className="mt-4 font-bold text-2xl">10:30 AM</p>
      </div>
    </div>
  );
}

export default Service;
