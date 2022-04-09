const SectionWrapper = (Component, sectionId, bgColor) =>
  function HOC() {
    return (
      <div id={sectionId} className={`w-full px-4 py-16 md:py-20 ${bgColor}`}>
        <div className={` md:w-3/4 md:mx-auto `}>
          <Component />
        </div>
      </div>
    );
  };

export default SectionWrapper;
