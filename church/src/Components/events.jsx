import EventImage from "../assets/worship.jpg"; // Replace with your event image path

function UpcomingEvents() {
  const events = [
    {
      day: "Monday",
      name: "Christmas Service",
      description:
        "Join us for a joyful Christmas celebration filled with worship, music, and fellowship.",
      image: EventImage,
    },
    {
      day: "Monday",
      name: "New Year Celebration",
      description:
        "Celebrate the New Year with a night of praise, thanksgiving, and reflection.",
      image: EventImage,
    },
    {
      day: "Friday",
      name: "Kesha Night",
      description:
        "Spend Friday night in prayer, worship, and renewal during our special Kesha.",
      image: EventImage,
    },
  ];

  return (
    <section className="text-center py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-12">
        Upcoming Events
      </h2>
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="max-w-md bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {event.day}
              </h3>
              <p className="text-lg text-gray-600 font-medium">{event.name}</p>
              <p className="text-sm text-gray-500 mt-3">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-12 px-8 py-3 bg-purple-600 text-white text-lg font-medium rounded-full hover:bg-purple-700 transition-all">
        See All Events
      </button>
    </section>
  );
}

export default UpcomingEvents;
