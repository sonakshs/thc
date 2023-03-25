import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-100 py-20" data-aos="fade-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Traditional Healing Centre 
          </h2>
          <p className="text-gray-800 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            congue, lectus vitae aliquam posuere, nisi odio lobortis lorem, vel
            dapibus lacus felis non metus. Donec euismod nisl eget eros
            interdum volutpat. Donec ac enim quam. Aliquam lobortis, sapien non
            dignissim dapibus, tortor velit ultricies purus, eu aliquam quam
            diam ac odio. Nullam sit amet velit eleifend, porta diam vitae,
            cursus dolor. Nam viverra elit eget turpis fermentum euismod. Cras
            blandit odio ut tortor euismod hendrerit.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative h-64 md:h-64">
            <Image
              src="https://picsum.photos/920/500"
              alt="Traditional Healing Center"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
