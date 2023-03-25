import Image from "next/image";

const events = [
    {
        id: 1,
        title: "Yoga Heals",
        date: "April 4, 2021",
        preacher: "Rich Wilkerson Jr.",
        series: "Yoga Sunday",
        image: "https://picsum.photos/701/500",
        videoUrl: "https://player.vimeo.com/video/123456789",
      },
      {
        id: 2,
        title: "Free Yoga webinars",
        date: "March 28, 2021",
        preacher: "DawnCheré Wilkerson",
        series: "Beginners Yoga",
        image: "https://picsum.photos/501/600",
        videoUrl: "https://player.vimeo.com/video/123456789",
      },
      {
        id: 3,
        title: "Chakra Kriya",
        date: "March 21, 2021",
        preacher: "Rich Wilkerson Jr.",
        series: "Hatha Yoga",
        image: "https://picsum.photos/700/700",
        videoUrl: "https://player.vimeo.com/video/123456789",
      },
];

export default function Events() {
  return (
    <section className="py-20" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow">
              <div className="relative h-56">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-800 mb-4">{event.date}</p>
                <p className="text-gray-800 mb-4">{event.preacher}</p>
                <p className="text-gray-800 mb-4">{event.series}</p>
                <div className="text-center">
                  <a
                    href={event.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white rounded-lg px-6 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
