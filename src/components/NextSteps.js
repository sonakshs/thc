"use client";
import SectionHeading from "./SectionHeading";
import NextStepCard from "./NextStepCard";

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
          {nextSteps.map((nextStep) => (
            <NextStepCard key={nextStep.id} {...nextStep} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
