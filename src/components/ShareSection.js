import React from "react";
import shareIcon from "../images/share-icon.svg";

const ShareSection = () => {
  return (
    <div className="box-shadow mt-10 mx-4 py-4 bg-[lightgrey] rounded-xl">
      <div className="flex justify-center items-center">
        <img src={shareIcon} alt="shareIcon" />
      </div>
      <div className="text-[12px] font-medium text-center mt-1">Share</div>
    </div>
  );
};

export default ShareSection;
