"use client";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const people = [
  {
    name: "Rich & DawnCheré Wilkerson",
    title: "Lead Instructor",
    imageSrc: "https://picsum.photos/500/500",
    instagramLink: "https://www.instagram.com/richwilkerson/",
    description: ""
  },
  {
    name: "Robert & Taylor Madu",
    title: "Teaching",
    imageSrc: "https://picsum.photos/501/500",
    instagramLink: "https://www.instagram.com/robertmadu/",
  },
  {
    name: "Brian & Bobbie Houston",
    title: "Global Senior",
    imageSrc: "https://picsum.photos/500/501",
    instagramLink: "https://www.instagram.com/brianchouston/",
  },
];

const OurPeople = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <SectionHeading title="Meet our people" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {people.map(
            ({ name, title, imageSrc, description, instagramLink }) => (
              <div key={name} className="flex items-center justify-center p-6">
                <div className="max-w-2xl mx-auto flex items-center">
                  <div className="mr-6">
                    <img
                      src={imageSrc}
                      alt={title}
                      className="rounded-full w-32 h-32"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-gray-600">{title}</p>
                    <p className="mt-4">{description}</p>
                    <Link href={instagramLink} target="_blank">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
