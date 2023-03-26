"use client";
import SectionHeading from "./SectionHeading";
import Link from 'next/link';

const nextSteps = [
  {
    title: "Diagnosis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan varius turpis, quis consectetur arcu fringilla at. Suspendisse potenti. Integer lacinia libero sed velit volutpat malesuada.",
    buttonText: "Plan your visit",
    buttonLink: "/plan-your-visit",
    iconSrc: "https://picsum.photos/501/500",
  },
  {
    title: "Treatment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan varius turpis, quis consectetur arcu fringilla at. Suspendisse potenti. Integer lacinia libero sed velit volutpat malesuada.",
    buttonText: "Find a group",
    buttonLink: "/groups",
    iconSrc: "https://picsum.photos/500/501",
  },
  {
    title: "Traditional medical practices",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan varius turpis, quis consectetur arcu fringilla at. Suspendisse potenti. Integer lacinia libero sed velit volutpat malesuada.",
    buttonText: "Learn more",
    buttonLink: "/baptism",
    iconSrc: "https://picsum.photos/502/500",
  },
  {
    title: "Personalised Report and Advisory",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan varius turpis, quis consectetur arcu fringilla at. Suspendisse potenti. Integer lacinia libero sed velit volutpat malesuada.",
    buttonText: "Join a team",
    buttonLink: "/teams",
    iconSrc: "https://picsum.photos/500/502",
  },
];

const NextSteps = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <SectionHeading title="Ways we approach health" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {nextSteps.map(
            ({ title, description, buttonLink, buttonText, iconSrc }) => (
              <div className="flex flex-col items-center justify-between p-6 bg-gray-100 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center">
                  <img src={iconSrc} alt="" />
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                  <div className="mt-4">
                    <Link legacyBehavior href={buttonLink}>
                      <a className="inline-block bg-primary text-blue-700 py-2 px-6 rounded-lg font-medium hover:bg-opacity-80 transition">
                        {buttonText}
                      </a>
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

export default NextSteps;
