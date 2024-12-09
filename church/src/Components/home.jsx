import { useState } from "react";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen bg-[url('https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] w-full bg-cover bg-center relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      {/* Navbar */}
      <div className="relative flex items-center justify-between text-white py-4 px-8">
        <div className="text-2xl font-bold">Nangoga P.A.G</div>
        {/* Hamburger Menu */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {/* Dropdown Menu for Small Screens */}
        {menuOpen && (
          <div className="absolute top-16 right-8 bg-gray-900 text-white py-2 px-4 rounded shadow-lg">
            <a href="#" className="block py-1 hover:underline">
              Home
            </a>
            <a href="#" className="block py-1 hover:underline">
              About Us
            </a>
            <a href="#" className="block py-1 hover:underline">
              Events
            </a>
            <a href="#" className="block py-1 hover:underline">
              Our Team
            </a>
            <a href="#" className="block py-1 hover:underline">
              Visit Us
            </a>
            <a href="#" className="block py-1 hover:underline">
              Our Programs
            </a>
          </div>
        )}
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-9 text-xl">
          <a href="#" className="block py-1 hover:underline cursor-pointer">
            Home
          </a>
          <a href="#" className="block py-1 hover:underline cursor-pointer">
            About Us
          </a>
          <a href="#" className="block py-1 hover:underline cursor-pointer">
            Events
          </a>
          <a href="#" className="block py-1 hover:underline cursor-pointer">
            Our Team
          </a>
          <a href="#" className="block py-1 hover:underline cursor-pointer">
            Visit Us
          </a>
          <a href="#" className="block py-1 hover:underline cursor-pointer">
            Our Programs
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex items-center justify-start min-h-screen px-8">
        <div className="w-full md:w-2/5 text-left text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A Place of Grace, Hope, and Transformation
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium">
            Where Lives Are Renewed in Christ’s Love
          </h3>
          <p className="text-base md:text-lg">
            Welcome to Nangoga PAG Church, a vibrant community of believers
            united in faith and love. Here, we gather to worship, grow
            spiritually, and share the gospel of Jesus Christ. Whether you're
            seeking a deeper connection with God or a place to belong, you are
            warmly invited to join us on this journey of faith.
            <br />
            <span className="font-semibold italic">
              "Come to me, all you who are weary and burdened, and I will give
              you rest." – Matthew 11:28
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
