import SectionWrapper from "./SectionWrapper";
import Title from "./Title";

const OurTeam = () => {
  return (
    <div>
      <Title value="Our Team" />
      <div className="flex flex-col pt-10 items-center space-y-8  md:flex-row md:justify-around  md:space-y-0 md:pt-16">
        <TeamProfile name="Mahmood Ali" position="Developer | Designer" />
        <TeamProfile name="Mustafa Mohammed" position="Project Manager" />
        <TeamProfile name="Ali Hasan" position="Developer | Designer" />
      </div>
    </div>
  );
};

const TeamProfile = ({ profileImg, name, position }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="h-28 w-28 md:h-36 md:w-36 border-2 rounded-full bg-grey" />
      <h6 className="text-xl font-medium pt-5 pb-1 md:text-2xl">{name}</h6>
      <p className="text-lg  md:text-xl text-black/90 ">{position}</p>
    </div>
  );
};

export default SectionWrapper(OurTeam, "our_team", "bg-gray-50");
