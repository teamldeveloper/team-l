import SectionWrapper from "../../../components/SectionWrapper";
import { images } from "../../../constants";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={images.app_logo}
        alt="app logo"
        className="h-20 object-scale-down mb-4  md:h-auto md:mb-6"
      />
      <h2 className="text-2xl mb-1 font-medium md:text-3xl">Debt Record App</h2>
      <h6 className="text-lg text-black/70 md:text-xl ">v1.1.0-beta</h6>
    </div>
  );
};

export default SectionWrapper(Header, "", "bg-gray-100");
