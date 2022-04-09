import { Link } from "react-router-dom";
import { images } from "../constants";
import SectionWrapper from "./SectionWrapper";
import Title from "./Title";

const FeatureApp = () => {
  return (
    <div className="flex flex-col md:flex-row md:max-h-screen ">
      <div className="md:basis-2/3 md:flex md:flex-col md:justify-center md:items-start">
        <Title value="Feature App" />
        <Descrpition />
        {/* TODO: find a good way to make it responsive */}
        <div className="hidden md:inline-flex">
          <DownloadButton />
        </div>
      </div>
      <AppUI />
      <div className="md:hidden">
        <DownloadButton />
      </div>
    </div>
  );
};

const Descrpition = () => {
  return (
    <p className="text-lg text-black/90 py-6 md:text-left md:text-2xl">
      <span className="font-medium text-black ">Debt Record </span>is your
      personal assistant to help you keep track of your day-to-day debt/payback
      and help you along the way to keep making your life better{'. '} 
      <Link className="text-blue-700 uppercase text-lg" to="/DebtRecord/#">more info</Link>
    </p>
  );
};

const DownloadButton = () => {
  return (
    <div className="w-44 m-auto md:m-0 md:w-48">
      <a
        href="https://play.google.com/store/apps/details?id=com.teaml.debt_record"
        target="_blank"
        rel="noreferrer"
      >
        <img
          srcset={`${images.play_store}v=a3894d71e1 480w,
                                ${images.play_storex2} 768w,
                                ${images.play_storex3} 962w `}
          alt="Download on Play Store"
        />
      </a>
    </div>
  );
};

const AppUI = () => {
  return (
    <div
      className={`md:basis-1/3 bg-[url('assets/app_ui.png')]  bg-contain bg-no-repeat bg-center  h-64 m-10 md:h-80`}
    ></div>
  );
};

export default SectionWrapper(FeatureApp, "feature_app");
