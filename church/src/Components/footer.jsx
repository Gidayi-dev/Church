import { FaFacebookF, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Nangoga P.A.G Church</h3>
          <ul>
            <li className="mb-2">kilayasimon@gmail.com</li>
            <li className="mb-2">+254725607325</li>
            <li className="mb-2">Busia, Kenya</li>
            <li className="mb-2">50400</li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#home" className="hover:text-purple-500">Home</a>
            </li>
            <li className="mb-2">
              <a href="#about" className="hover:text-purple-500">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#visit" className="hover:text-purple-500">Visit Us</a>
            </li>
            <li className="mb-2">
              <a href="#events" className="hover:text-purple-500">Events</a>
            </li>
            <li className="mb-2">
              <a href="#programs" className="hover:text-purple-500">Our Programs</a>
            </li>
          </ul>
        </div>

        {/* Programs Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Programs</h3>
          <ul>
            <li className="mb-2">
              <a href="#kids-service" className="hover:text-purple-500">Kids Service</a>
            </li>
            <li className="mb-2">
              <a href="#kesha" className="hover:text-purple-500">Kesha</a>
            </li>
            <li className="mb-2">
              <a href="#ministry" className="hover:text-purple-500">Ministry</a>
            </li>
          </ul>
        </div>

        {/* Media Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Media</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              className="text-gray-800 hover:text-purple-500 text-2xl transition-colors"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com"
              className="text-gray-800 hover:text-purple-500 text-2xl transition-colors"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
