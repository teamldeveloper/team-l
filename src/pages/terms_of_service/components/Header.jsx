import { Title } from "../../../components";
import { images } from "../../../constants";

const Header = () => {
  return (
    <div className="flex flex-col items-center  ">
      <img
        src={images.terms_of_service}
        alt="Terms of Service"
        className="pb-6 object-contain px-10 "
      />
      <div className=" p-8 bg-gray-100 w-full ">
        <Title className="pb-1" value="Terms of Service"/>
        <h3 className="text-lg">
          This Terms of Service is effective as of 2024-july-05
        </h3>
      </div>
    </div>
  );
};

export default Header;
