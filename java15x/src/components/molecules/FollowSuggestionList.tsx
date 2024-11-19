import React from "react";
import FollowSuggestionCard from "../atoms/FollowSuggestionCard";

function FollowSuggestionList() {
  return (
    <div className="col">
      <div className="row mt-2">
        <h5 style={{ marginBottom: "10px" }}>Who to follow</h5>
        <hr />
      </div>
      <div className="row">
        <FollowSuggestionCard
          userId={1}
          name="Alex"
          username="Alex1"
          avatar="https://i.pravatar.cc/200"
        />
        <hr />
        <FollowSuggestionCard
          userId={1}
          name="Alexander"
          username="Alex2"
          avatar="https://i.pravatar.cc/200"
        />
        <hr />
        <FollowSuggestionCard
          userId={1}
          name="Joseph"
          username="Alex3"
          avatar="https://i.pravatar.cc/200"
        />
        <hr style={{ marginBottom: "0px" }} />
      </div>

      <div className="row p-2">
        <span style={{ color: "#1da1f2", cursor: "pointer", fontSize: "14px" }}>
          Show more
        </span>
      </div>
    </div>
  );
}

export default React.memo(FollowSuggestionList);
