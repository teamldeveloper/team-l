const SectionWrapper = (Component, sectionId, bgColor) =>
  function HOC() {
    return (
      <div id={sectionId} className={`w-full px-4 py-16 md:py-20 ${bgColor} `}>
        <div className={`lg:w-3/5 lg:m-auto sm:w-[95%] sm:m-auto `}>
          <Component />
        </div>
      </div>
    );
  };

export default SectionWrapper;
