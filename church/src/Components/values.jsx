import Cross from "../assets/cross.jpg";
import Member from "../assets/member2.jpg";
import Hall from "../assets/church-hall.jpg";

function Values() {
  return (
    <div className="bg-black py-16">
      <h1 className="text-white text-5xl font-extrabold text-center mb-16">
        Our Values
      </h1>
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center w-11/12 mx-auto">
        {/* First Value */}
        <div className="flex flex-col items-center text-center text-white w-72">
          <img
            src={Cross}
            alt="Worship"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">Faith</h2>
          <p className="text-lg text-gray-300">
            <span className="italic">"Rooted in Christ, Guided by His Word"</span>
            At Nangoga P.A.G Church, faith is the foundation of everything we do. We believe in a deep, unwavering trust in God and seek to grow spiritually by living according to His Word and teachings.
          </p>
        </div>
        {/* Second Value */}
        <div className="flex flex-col items-center text-center text-white w-72">
          <img
            src={Member}
            alt="J.O.Y"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">Community</h2>
          <p className="text-lg text-gray-300">
            <span className="italic">"United in Love, Serving Together"</span>
            We are a family of believers who support one another and embrace everyone with open arms. Through fellowship, service, and genuine connections, we strive to create a sense of belonging and togetherness.
          </p>
        </div>
        {/* Third Value */}
        <div className="flex flex-col items-center text-center text-white w-72">
          <img
            src={Hall}
            alt="Being Sent"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">Transformation</h2>
          <p className="text-lg text-gray-300">
            <span className="italic">"Changed Lives, Renewed Purpose"</span>
            We are committed to helping individuals experience transformation through the love of Christ. By equipping people with spiritual tools and guidance, we empower them to discover their purpose and live fulfilling lives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
