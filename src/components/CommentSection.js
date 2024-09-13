import React from "react";
import commentDP from "../images/comment-dp.svg";

const CommentSection = () => {
  return (
    <div className="box-shadow mt-4 mx-4 p-4 bg-[lightgrey] rounded-xl">
      <div className="flex justify-between items-center">
        <div className="text-[18px] font-medium">Comments</div>
        <div className="text-[16px] font-medium">See all</div>
      </div>
      <div className="flex gap-2 mt-4">
        <img src={commentDP} alt="commentDP" />
        <div>
          <div className="text-[16px] font-medium leading-[21px]">
            Gwen Stacy{" "}
            <span className="text-![#D8D8D8]">See you in the next event </span>
            @roger vaccaro
          </div>
          <div className="text-[13px] font-medium leading-[15px] text-![#FFFFFF99] flex gap-4 items-center mt-[6px]">
            <span>1s</span>
            <span>241 likes</span>
            <span>Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
