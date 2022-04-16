import { Title } from "../../../components";
import { images } from "../../../constants";

const Header = () => {
  return (
    <div className="flex flex-col items-center  ">
      <img
        src={images.privacy_policy}
        alt="Privacy Policy"
        className="pb-6 object-contain px-10 "
      />
      <div className=" p-8 bg-gray-100 w-full ">
        <Title className="pb-1" value="Privacy Policy " />
        <h3 className="text-lg">
          This policy is effective as of 2022-April-16
        </h3>
      </div>
    </div>
  );
};

export default Header;
