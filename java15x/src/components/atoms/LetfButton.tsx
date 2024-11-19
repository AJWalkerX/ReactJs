import React from "react";
import "./LeftButton.css";
import { useNavigate } from "react-router-dom";
interface ILeftButtonProps {
  iconType:
    | "Home"
    | "Explore"
    | "Notifications"
    | "Message"
    | "Profile"
    | "List"
    | "Location"
    | "More";
  name: string;
  path: string;
  isActive?: boolean; // ? işarete boolean değeri zorunlu olmadığını ifade ediyor
}
function LetfButton(props: ILeftButtonProps) {
  const navigate = useNavigate();
  const { iconType, name, path, isActive } = props;
  const icons = () => {
    switch (iconType) {
      case "Home":
        return (
          <i className="fa-solid fa-house" style={{ color: "#1da1f2" }}></i>
        );
      case "Explore":
        return (
          <i className="fa-solid fa-hashtag" style={{ color: "#1da1f2" }}></i>
        );

      case "Notifications":
        return (
          <i className="fa-regular fa-bell" style={{ color: "#1da1f2" }}></i>
        );
      case "Message":
        return (
          <i
            className="fa-regular fa-envelope"
            style={{ color: "#1da1f2" }}
          ></i>
        );
      case "Profile":
        return (
          <i className="fa-regular fa-user" style={{ color: "#1da1f2" }}></i>
        );
      case "List":
        return (
          <i className="fa-solid fa-list" style={{ color: "#1da1f2" }}></i>
        );
      case "Location":
        return (
          <i
            className="fa-solid fa-location-dot"
            style={{ color: "#1da1f2" }}
          ></i>
        );
      case "More":
        return (
          <i className="fa-solid fa-ellipsis" style={{ color: "#1da1f2" }}></i>
        );
      default:
        return <></>;
    }
  };
  const goTo = () => {
    navigate(path);
  };
  const getStyleName = () => {
    return isActive
      ? { fontWeight: "bold", color: "white" }
      : { color: "white" };
  };
  return (
    <div onClick={goTo} className="row x-btn-hover align-items-center">
      <div className="col-2">{icons()}</div>

      <div className="col-10">
        <span style={getStyleName()}>{name}</span>
      </div>
    </div>
  );
}

export default React.memo(LetfButton);
