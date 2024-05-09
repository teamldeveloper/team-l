import SectionWrapper from "../../../components/SectionWrapper";
import { images } from "../../../constants";
import { Title } from "../../../components";


const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={images.app_logo}
        alt="app logo"
        className="h-20 object-scale-down mb-1  md:h-auto md:mb-2"
      />
      <h2 className="text-xl mb-1  md:text-1xl pt-2">Debt Record App</h2>
      <Title value={"Delete your Account"} />
    </div>
  );
};

export default SectionWrapper(Header, "", "bg-gray-100");
