import Image from "next/image";

const ministries = [
  {
    id: 1,
    title: "Ayurveda",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur risus eget magna congue porttitor.",
    image: "https://picsum.photos/600/500",
  },
  {
    id: 2,
    title: "Nabhi Chikitsa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur risus eget magna congue porttitor.",
    image: "https://picsum.photos/500/600",
  },
  {
    id: 3,
    title: "Medical Astrology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur risus eget magna congue porttitor.",
    image: "https://picsum.photos/600/600",
  },
];

export default function Ministries() {
  return (
    <section className="bg-gray-100 py-20" data-aos="fade-up">
      <div className="container mx-auto px-2 md:px-0">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Focuses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ministries.map((ministry) => (
            <div key={ministry.id} className="bg-white rounded-lg shadow">
              <div className="relative h-56">
                <Image
                  src={ministry.image}
                  alt={ministry.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {ministry.title}
                </h3>
                <p className="text-gray-800">{ministry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
