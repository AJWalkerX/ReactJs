import React, { useState } from "react";
interface IPostIconsProps {
  type: "Comment" | "Retweet" | "Like" | "Views";
  count: number;
  postId: string;
}
function PostIcons(props: IPostIconsProps) {
  const { type, count, postId } = props;
  const [onFocus, setOnFocus] = useState(false);
  const getIcon = () => {
    switch (type) {
      case "Comment":
        return (
          <i
            className="fa-regular fa-comment fa-sm m-1"
            style={onFocus ? { color: "#1da1f2" } : { color: "white" }}
          ></i>
        );
      case "Retweet":
        return (
          <i
            className="fa-solid fa-retweet"
            style={onFocus ? { color: "#1da1f2" } : { color: "white" }}
          ></i>
        );
      case "Like":
        return (
          <i
            className="fa-solid fa-heart"
            style={onFocus ? { color: "#1da1f2" } : { color: "white" }}
          ></i>
        );
      case "Views":
        return (
          <i
            className="fa-solid fa-chart-simple"
            style={onFocus ? { color: "#1da1f2" } : { color: "white" }}
          ></i>
        );
      default:
        return null;
    }
  };
  return (
    <div
      className="x-post-icons-body"
      onMouseEnter={() => setOnFocus(true)}
      onMouseLeave={() => setOnFocus(false)}
    >
      <div className="row">
        <div className="col">
          {getIcon()}
          <span
            style={
              onFocus
                ? { color: "#1da1f2", fontSize: "12px" }
                : { color: "white", fontSize: "12px" }
            }
          >
            {" "}
            {"  " + count}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostIcons;
