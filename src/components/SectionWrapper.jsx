const Hero = (Component, sectionId) => {
  return (
    <div id={sectionId} className="">
      <Component />
    </div>
  );
};

export default Hero;
