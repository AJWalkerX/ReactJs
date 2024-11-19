import React from "react";
import "./FollowListCard.css";
interface IFollowSuggestionCardProps {
  userId: number;
  name: string;
  username: string;
  avatar: string;
}
function FollowSuggestionCard(props: IFollowSuggestionCardProps) {
  const { userId, name, username, avatar } = props;
  return (
    <div className="row x-list">
      <div className="col-3">
        <img src={avatar} className="x-avatar-img" />
      </div>
      <div className="col-5">
        <div className="row align-items-bottom">
          <label className="x-follow-text-name "> {name}</label>
        </div>
        <div className="row align-items-top">
          <label className="x-follow-text-username"> {username}</label>
        </div>
      </div>
      <div className="col-4">
        <input type="button" value={"Follow"} className="x-btn-follow" />
      </div>
    </div>
  );
}

export default FollowSuggestionCard;
