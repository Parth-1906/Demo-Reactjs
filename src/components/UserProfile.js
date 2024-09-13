import React, { useEffect, useState } from "react";
import axios from "axios";
import ShareSection from "./ShareSection";
import ProfileSection from "./ProfileSection";
import CommentSection from "./CommentSection";
import RatingSection from "./RatingSection";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.post(
          "https://dev.elred.io/noSessionProfileDetails?userCode=66961e8dcc9a8155d09b8c9b"
        );
        setUserData(response.data);
      } catch (error) {
        console.log(error, "error");
      }
    }

    fetchUserData(0);
  }, []);

  console.log(userData, "userData");

  return (
    <>
      {userData &&
        userData?.result?.map((user, index) => {
          return (
            <div className="profile-container" key={index}>
              <div className="bg-img">
                <img
                  src={user.profileDesignInfo.profileBannerImageURL}
                  alt="profileBannerImageURL"
                />
              </div>
              <div className="profile-info">
                <div className="profile-title">Profile</div>
                <ProfileSection user={user} />
                <ShareSection />
                <RatingSection />
                <CommentSection />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default UserProfile;
