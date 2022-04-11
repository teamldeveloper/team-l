import SectionWrapper from "./SectionWrapper";

const Hero = () => {
  return (
    <div className=" md:h-3/4 flex items-center justify-center flex-col ">
      <div className=" w-full text-2xl text-white md:text-4xl pb-4 font-medium">
        Te-<span className="text-8xl md:text-9xl font-oldEnglish">L</span>-am
      </div>
      <h2 className="text-lg  text-white/70 md:text-2xl ">
        We are an android app development team develop apps that help you to
        make your life better
      </h2>
    </div>
  );
};

export default SectionWrapper(Hero, "home", " bg-[#303E9F] ");
