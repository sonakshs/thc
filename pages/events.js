import Head from "next/head";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import JoinTeam from "../src/components/JoinTeam";
import Footer from "../src/components/Footer";
import "../src/app/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

const events = [
  {
    name: 'Meditation Retreat',
    date: '26-28 May 2023',
    image: 'https://picsum.photos/920/500',
    url: '#',
    description: 'Join us for a weekend of meditation and relaxation in the beautiful countryside.',
  },
  {
    name: 'Yoga Retreat',
    date: '15-17 June 2023',
    image: 'https://picsum.photos/520/500',
    url: '#',
    description: 'Experience the transformative power of yoga and connect with nature in this three-day retreat.',
  },
  {
    name: 'Sustainable Living Workshop',
    date: '19-21 July 2023',
    image: 'https://picsum.photos/900/500',
    url: '#',
    description: 'Learn how to live sustainably and reduce your ecological footprint in this hands-on workshop.',
  },
  {
    name: 'Permaculture Design Course',
    date: '2-14 August 2021',
    image: 'https://picsum.photos/920/50',
    url: '#',
    description: 'Discover the principles and practices of permaculture and learn how to design and manage sustainable ecosystems.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <Header />
      <div className="bg-cover bg-center h-80">
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white px-2 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl md:text-2xl mb-8">Join us for a unique and transformative experience.</p>
        </div>
      </div>

      <div className="container mx-auto my-16 px-2 md:px-0">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold my-4">Our Events</h2>
          <p className="text-gray-600 mb-8">Choose from our upcoming events and join us for a unique and transformative experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.name} className="rounded-lg bg-red-800 overflow-hidden flex flex-col">
              <div className="relative h-64">
                <img src={event.image} alt={event.name} className="rounded-t-lg h-full w-full object-cover" />
                <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 rounded-lg">{event.date}</div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{event.name}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                </div>
                <div className="flex justify-end">
                  <a href={event.url} className="bg-accent text-black px-4 py-2 rounded-full hover:bg-opacity-75 transition duration-300">
                    <i className="fas fa-info-circle"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <JoinTeam />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
