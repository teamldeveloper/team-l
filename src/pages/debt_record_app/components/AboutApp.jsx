import {
  AppUI,
  Title,
  SectionWrapper,
  GetItOnGooglePlay,
} from "../../../components";

const FeatureApp = () => {
  return (
    <div className="flex flex-col md:flex-row md:max-h-screen ">
      <div className=" text-left text-black/80 md:basis-2/3 md:flex md:flex-col md:justify-center ">
        <Title value="About" />
        <Descrpition /> <AppUI className="md:hidden " />
        <AppFeatures />
        <GetItOnGooglePlay />
      </div>
      <AppUI className="hidden md:block" />
    </div>
  );
};

const Descrpition = () => {
  return (
    <p className="text-lg text-black/90 py-6 md:text-left ">
      <span className="font-medium text-black ">Debt Record </span>is your
      personal assistant to help you keep track of your day-to-day debt/payback
      and help you along the way to keep making your life better
    </p>
  );
};

const AppFeatures = () => {
  return (
    <div className="text-left">
      <Title value={"App Features"} />
      <ul className="list-disc text-lg pl-5 pb-8 pt-4">
        <li>Add an infinite number of clients.</li>
        <li>Backup and restore to save your data from loss.</li>
        <li>Simple and easy to use.</li>
      </ul>
    </div>
  );
};

export default SectionWrapper(FeatureApp, "about");
