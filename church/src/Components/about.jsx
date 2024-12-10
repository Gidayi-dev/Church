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
          At Nangoga PAG Church, we are a welcoming community of believers
          devoted to spreading the love and teachings of Jesus Christ. Rooted in
          the Pentecostal tradition, our church is a place where lives are
          transformed, faith is nurtured, and the presence of God is celebrated.
          We believe in fostering genuine connections, spiritual growth, and
          compassionate service to others. Whether you're seeking a deeper
          understanding of your faith, a supportive community, or a space to
          experience God’s grace, we invite you to join us as we walk this
          journey of hope and purpose together.
        </p>
      </div>

      {/* Media Section */}
      <div className="md:w-1/2">
        <img
          src={AboutImage}
          alt="About us"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
    </div>
  );
}

export default About;
