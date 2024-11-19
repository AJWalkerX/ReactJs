import React from "react";
import "./PostTitle.css";

interface IPostTitleProps {
  name: string;
  isPremium: boolean;
  username: string;
  shareDate: string;
}

function PostTitle(props: IPostTitleProps) {
  const { name, isPremium, username, shareDate } = props;
  return (
    <div className="row">
      <div className="col align-content-center">
        <span className="x-post-title-name">{name}</span>
        <span className="x-post-title-check">
          {isPremium && (
            <i
              className="fa-solid fa-circle-check small"
              style={{ color: "#1da1f2" }}
            ></i>
          )}
        </span>
        <span className="x-post-title-username">@{username}</span>
        <span className="x-post-title-point">.</span>
        <span className="x-post-title-date">{shareDate}</span>
      </div>
    </div>
  );
}

export default PostTitle;
