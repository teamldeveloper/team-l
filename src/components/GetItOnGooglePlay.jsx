import { images } from "../constants";

const GetItOnGooglePlay = ({ className }) => {
  return (
    <div className={`w-44 m-auto md:m-0 md:w-48 ${className}`}>
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

export default GetItOnGooglePlay;
