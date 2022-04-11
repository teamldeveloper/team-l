const AppUI = ({ className }) => {
  return (
    <div
      className={`${className} md:basis-1/3 bg-[url('assets/app_ui.png')]  bg-contain bg-no-repeat bg-center  h-64 m-10 md:h-80 `}
    ></div>
  );
};

export default AppUI;
