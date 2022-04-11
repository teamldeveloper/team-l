import { images } from "../constants";
import SectionWrapper from "./SectionWrapper";
import Title from "./Title";

const OurTeam = () => {
  return (
    <div>
      <Title value="Our Team" />
      <div className="flex flex-col pt-10 items-center space-y-8  md:flex-row md:justify-around  md:space-y-0 md:pt-16">
        <TeamProfile
          name="Mahmood Ali"
          profileImg={images.mahmood}
          position="Developer | Designer"
        />
        <TeamProfile
          name="Mustafa Mohammed"
          profileImg={images.mustafa}
          position="Project Manager"
        />
        <TeamProfile
          name="Ali Hasan"
          profileImg={images.ali}
          position="Developer | Designer"
        />
      </div>
    </div>
  );
};

const TeamProfile = ({ profileImg, name, position }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={profileImg}
        className="h-28 w-28 md:h-36 md:w-36 border-2 rounded-full bg-grey"
        alt={name}
      />
      <h6 className="text-xl font-medium pt-5 pb-1 md:text-xl">{name}</h6>
      <p className="text-lg  text-black/80 ">{position}</p>
    </div>
  );
};

export default SectionWrapper(OurTeam, "our_team", "bg-gray-50");
