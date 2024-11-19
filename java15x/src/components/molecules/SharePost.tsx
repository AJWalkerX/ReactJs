import React from "react";
import "./SharePost.css";
import UserAvatar from "../atoms/UserAvatar";
function SharePost() {
  return (
    <div>
      <div className="row border">
        <div className="col-2 text-center mt-1">
          <UserAvatar userAvatarUrl="https://i.pravatar.cc/200" />
        </div>
        <div className="col-10">
          <div className="row">
            <textarea
              className="x-share-post-textarea"
              rows={5}
              placeholder="What's happening"
            ></textarea>
          </div>
          <div className="row">
            <hr
              style={{
                margin: "0px",
                marginBlock: "7px",
                width: "96%",
              }}
            />
          </div>
          <div className="row">
            <div className="col-8">
              <i className="fa-regular fa-image x-share-post-icon"></i>
              <i className="fa-solid fa-list-ul x-share-post-icon"></i>
              <i className="fa-solid fa-face-smile x-share-post-icon"></i>
              <i className="fa-regular fa-clock x-share-post-icon"></i>
              <i className="fa-solid fa-location-dot x-share-post-icon"></i>
              <i className="fa-solid fa-bold x-share-post-icon"></i>
              <i className="fa-solid fa-italic x-share-post-icon"></i>
            </div>
            <div className="col-4">
              <input
                type="button"
                value="Tweet"
                className="x-new-share-post-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharePost;
