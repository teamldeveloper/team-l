import { Link } from "react-router-dom";
import {
  SectionWrapper,
  Title,
  GetItOnGooglePlay,
  AppUI,
} from "../../../components";

const FeatureApp = () => {
  return (
    <div className="flex flex-col md:flex-row md:max-h-screen ">
      <div className="md:basis-2/3 md:flex md:flex-col md:justify-center md:items-start">
        <Title value="Feature App" />
        <Descrpition />
        {/* TODO: find a good way to make it responsive */}
        <div className="hidden md:inline-flex">
          <GetItOnGooglePlay />
        </div>
      </div>
      <AppUI />
      <div className="md:hidden">
        <GetItOnGooglePlay />
      </div>
    </div>
  );
};

const Descrpition = () => {
  return (
    <div>
      <p className="text-lg text-black/90 py-6 md:text-left">
        <span className="font-medium text-black ">Debt Record </span>is your
        personal assistant to help you keep track of your day-to-day
        debt/payback and help you along the way to keep making your life better
        {". "}
        <Link className=" text-blue-700 uppercase text-lg" to="/DebtRecord/#">
          more info
        </Link>
      </p>
    </div>
  );
};

export default SectionWrapper(FeatureApp, "feature_app");
