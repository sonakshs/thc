import Link from 'next/link';

const NextStepCard = ({ title, description, buttonText, buttonLink, iconSrc }) => {
  return (
    <div className="flex flex-col items-center justify-between p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center">
        <img src={iconSrc} alt="" />
      </div>
      <div className="text-center mt-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">
          <Link legacyBehavior href={buttonLink}>
            <a className="inline-block bg-primary text-blue-700 py-2 px-6 rounded-lg font-medium hover:bg-opacity-80 transition">{buttonText}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NextStepCard;
