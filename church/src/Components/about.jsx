import AboutImage from "../assets/member.jpg";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 m-8 w-11/12 lg:w-3/4 mx-auto">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h2 className="text-4xl font-semibold text-purple-400 uppercase tracking-wide">
          We Are
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 leading-snug">
          Nangoga P.A.G Church
        </h1>
        <p className="text-gray-600 text-2xl leading-relaxed">
          At Nangoga PAG Church, we are a welcoming community of believers devoted to spreading the love and teachings of Jesus Christ. Rooted in the Pentecostal tradition, our church is a place where lives are transformed, faith is nurtured, and the presence of God is celebrated. We believe in fostering genuine connections, spiritual growth, and compassionate service...
        </p>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={AboutImage}
          alt="About the Church"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default About;
