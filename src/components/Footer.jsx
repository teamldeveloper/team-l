import { FaFacebookF, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" text-white/50 flex flex-col justify-center space-y-2 items-center md:flex-row md:justify-between ">
      <div className="flex flex-col items-center md:items-start">
        <SocialMedia />
        <p className="pt-2">Copyright © {(new Date().getFullYear())} Team-L All Rights Reserved.</p>
      </div>
      
      <Link to="/PrivacyPolicy/#">Privacy Policy</Link>
    </div>
  );
};

const SocialMedia = () => {
  const iconStyle = "h-8 w-8 border-[1px] rounded-full p-1.5 ";
  const socialMediaLinks = [
    {
      link: "https://www.youtube.com/channel/UCu3kTP3L9Dryhupr0hwR8Jw",
      icon: <FaYoutube className={iconStyle} />,
    },
    {
      link: "https://www.facebook.com/TeamLDeveloper/",
      icon: <FaFacebookF className={iconStyle} />,
    },
    {
      link: "https://t.me/team_l_developers",
      icon: <FaTelegramPlane className={iconStyle} />,
    },
  ];
  return (
    <div className="flex text-white items-center space-x-2">
      {socialMediaLinks.map((item) => (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SectionWrapper(Footer, "footer", "bg-black/95");
