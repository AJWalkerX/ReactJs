import React from "react";
import TrendCard from "../atoms/TrendCard";

function TrendList() {
  return (
    <div className="col">
      <div className="row mt-2">
        <h5 style={{ marginBottom: "10px" }}>Trends</h5>
        <hr />
      </div>
      <div className="row">
        <TrendCard />
        <hr />
        <TrendCard />
        <hr />
        <TrendCard />
        <hr />
      </div>

      <div className="row p-2">
        <span style={{ color: "#1da1f2", cursor: "pointer", fontSize: "14px" }}>
          Show more
        </span>
      </div>
    </div>
  );
}

export default TrendList;
