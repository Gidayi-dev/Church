import { FaChild, FaPrayingHands, FaChurch } from "react-icons/fa"; // Importing React Icons for the programs

function OurPrograms() {
  return (
    <section className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-purple-600">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kids Service */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FaChild className="text-purple-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Kids Service</h3>
            <p className="text-gray-600">
              Our Kids Service is designed to nurture and guide children in
              their spiritual growth through engaging activities, stories, and
              songs.
            </p>
          </div>

          {/* Kesha */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FaPrayingHands className="text-purple-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Kesha</h3>
            <p className="text-gray-600">
              Join us for our night vigil (Kesha) where we come together in
              prayer, worship, and fellowship, seeking a deeper connection with
              God.
            </p>
          </div>

          {/* Ministry */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <FaChurch className="text-purple-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Ministry</h3>
            <p className="text-gray-600">
              Our Ministry focuses on spreading the gospel and serving the
              community through outreach programs, Bible studies, and counseling
              sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPrograms;
