import SectionHeading from './SectionHeading';
import PeopleCard from './PeopleCard';

const OurPeople = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <SectionHeading title="Meet our people" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <PeopleCard
            name="Rich & DawnCheré Wilkerson"
            title="Lead Instructor"
            imageSrc="https://picsum.photos/500/500"
            instagramLink="https://www.instagram.com/richwilkerson/"
          />
          <PeopleCard
            name="Robert & Taylor Madu"
            title="Teaching"
            imageSrc="https://picsum.photos/501/500"
            instagramLink="https://www.instagram.com/robertmadu/"
          />
          <PeopleCard
            name="Brian & Bobbie Houston"
            title="Global Senior"
            imageSrc="https://picsum.photos/500/501"
            instagramLink="https://www.instagram.com/brianchouston/"
          />
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
