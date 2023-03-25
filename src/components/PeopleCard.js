const PeopleCard = ({ name, title, description, imageSrc }) => {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="max-w-2xl mx-auto flex items-center">
          <div className="mr-6">
            <img src={imageSrc} alt="" className="rounded-full w-32 h-32" />
          </div>
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-gray-600">{title}</p>
            <p className="mt-4">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PeopleCard;
  