import SectionWrapper from "./SectionWrapper";
import { FaFacebookF, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" text-white/50 flex flex-col justify-center space-y-2 items-center md:flex-row md:justify-between ">
      <div className="flex flex-col items-center md:items-start">
        <SocialMedia />
        <p className="pt-2">Copyright © 2022 Team-L All Rights Reserved.</p>
      </div>
      <a href="#">Privacy Policy</a>
    </div>
  );
};

const SocialMedia = () => {
  const iconStyle = "h-8 w-8 border-[1px] rounded-full p-1.5 ";
  return (
    <div className="flex text-white items-center space-x-2">
      <FaYoutube className={iconStyle} />
      <FaFacebookF className={iconStyle} />
      <FaTelegramPlane className={iconStyle} />
    </div>
  );
};

export default SectionWrapper(Footer, "footer", "bg-black/95");
