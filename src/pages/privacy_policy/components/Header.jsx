import { Title } from "../../../components";
import { images } from "../../../constants";

const Header = () => {
  return (
    <div className="flex flex-col items-center ">
      <img src={images.privacy_policy} className="pb-6" />
      <div className="bg-gray-100 p-8 w-full">
        <Title className="pb-1" value="Privacy Policy " />
        <h3 className="text-lg ">
          This policy is effective as of 2022-April-01
        </h3>
      </div>
    </div>
  );
};

export default Header;
