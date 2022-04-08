const Hero = () => {
  return (
    <div className="h-60 md:h-96 p-9 bg-gray-200 flex items-center justify-center flex-col ">
      <div className="md:w-3/4 md:mx-auto">
        <div className=" w-full text-2xl text-black/90 md:text-4xl pb-4 font-medium">
          Te-<span className="text-8xl md:text-9xl font-oldEnglish">L</span>-am
        </div>
        <p className="text-lg text-black/75 md:text-2xl ">
          We are an android app development team develop apps that help you to
          make your life better
        </p>
      </div>
    </div>
  );
};

export default Hero;
