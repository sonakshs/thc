import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Image
        alt="Traditional Health Centre"
        src="https://picsum.photos/1920/1080"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center px-2 md:px-0">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center">
          Traditional Health Centre
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl mb-12 text-center">
          Traditional India is much more than you think: Land of Gold
        </p>
        <p className="text-white italic text-lg sm:text-xl md:text-2xl mb-12 text-center">
          Our mission is simple, to bring those who are far from Health close to
          it.
        </p>
        <a
          href="#"
          className="text-white bg-blue-500 hover:bg-blue-600 py-3 px-8 rounded-full text-lg font-semibold"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
