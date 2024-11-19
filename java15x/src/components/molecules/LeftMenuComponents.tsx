import React from "react";
import LetfButton from "../atoms/LetfButton";

function LeftMenuComponents() {
  return (
    <div className="row justify-content-center">
      <div className="col-7">
        <div className="row mb-2">
          <LetfButton
            iconType="Home"
            name="Home"
            path="/home"
            isActive={true}
          />
        </div>
        <div className="row mb-2">
          <LetfButton iconType="Explore" name="Explore" path="/Explore" />
        </div>
        <div className="row mb-2">
          <LetfButton
            iconType="Notifications"
            name="Notifications"
            path="/Notifications"
          />
        </div>

        <div className="row mb-2">
          <LetfButton iconType="List" name="List" path="/List" />
        </div>

        <div className="row mb-2">
          <LetfButton iconType="Location" name="Location" path="/Location" />
        </div>
        <div className="row mb-2">
          <LetfButton iconType="Profile" name="Profile" path="/Profile" />
        </div>
        <div className="row mb-2">
          <LetfButton iconType="More" name="More" path="/More" />
        </div>
      </div>
    </div>
  );
}

export default LeftMenuComponents;
