import React from "react";
import LeftMenuComponents from "../../components/molecules/LeftMenuComponents";
import "./HomePage.css";
import SearchInput from "../../components/atoms/SearchInput";
import FollowSuggestionList from "../../components/molecules/FollowSuggestionList";
import TrendList from "../../components/molecules/TrendList";
import SharePost from "../../components/molecules/SharePost";
import PostList from "../../components/organisms/PostList";

function HomePage() {
  return (
    <div className="container">
      <div className="row mt-5" style={{ minHeight: "200px" }}>
        <div className="col-3">
          <LeftMenuComponents />
        </div>
        <div className="col-5 border-start border-end">
          <div className="row">
            <SharePost />
          </div>
          <div className="row">
            <PostList />
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <SearchInput />
          </div>
          <div className="row rounded-3 m-2 x-right-section">
            <FollowSuggestionList />
          </div>
          <div className="row rounded-3 m-2 x-right-section">
            <TrendList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
