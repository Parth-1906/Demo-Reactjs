import React from "react";
import ratingsIcon from "../images/ratings-icon.svg";

const RatingSection = () => {
  return (
    <div className="box-shadow mt-8 mx-4 p-4 bg-[lightgrey] rounded-xl relative">
      <div className="absolute top-[-22px] flex justify-center w-full left-0">
        <img src={ratingsIcon} alt="ratingsIcon" />
      </div>
      <div className="text-[18px] font-medium">Ratings</div>
      <div
        className="flex gap-7 mt-4 pb-2"
        style={{ borderBottom: "0.4px solid #FFFFFF4D" }}
      >
        <div className="text-[20px] font-medium">57</div>
        <div className="text-[12px] font-medium">
          Has ethical code of conduct and is safe to do bussines with
        </div>
      </div>
      <div className="flex items-center gap-7 mt-[30px] pb-2">
        <div className="text-[20px] font-medium">27</div>
        <div className="text-[12px] font-medium">
          Met In real life/Video call
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
