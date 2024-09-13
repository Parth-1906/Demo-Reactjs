import React from "react";
import verifiedIcon from "../images/verified-icon.svg";
import founderIcon from "../images/founder-icon.svg";
import locationIcon from "../images/location-icon.svg";

const ProfileSection = ({ user }) => {
  return (
    <div className="mt-16 ml-6">
      <img src={user?.dpURL} alt="dpURL" className="profile-dp" />
      <div className="text-[24px] font-medium mt-2.5 flex items-center gap-1">
        {user.firstname + " " + user.lastname}
        <img src={verifiedIcon} alt="verifiedIcon" />
      </div>
      <div className="text-[18px] font-medium mt-1 flex items-center gap-1">
        <img src={founderIcon} alt="founderIcon" />
        {user.title[0]?.value}
      </div>
      <div className="text-[18px] font-medium mt-1 flex items-center gap-1">
        <img src={locationIcon} alt="locationIcon" className="px-1" />
        {user.address.fullAddress}
      </div>
    </div>
  );
};

export default ProfileSection;
