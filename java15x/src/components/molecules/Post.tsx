import React from "react";
import "./Post.css";
import UserAvatar from "../atoms/UserAvatar";
import PostTitle from "../atoms/PostTitle";
import PostIcons from "../atoms/PostIcons";
interface IPostProps {
  userAvatar: string;
  name: string;
  isPremium: boolean;
  username: string;
  shareDate: string;
  userId: string;
  comment: string;
  postImageUrl: string;
  postId: string;
  commentCount: number;
  reteweetCount: number;
  likeCount: number;
  viewCount: number;
}
function Post(props: IPostProps) {
  const {
    userAvatar,
    name,
    isPremium,
    username,
    shareDate,
    userId,
    comment,
    postImageUrl,
    postId,
    commentCount,
    reteweetCount,
    likeCount,
    viewCount,
  } = props;
  return (
    <div className="row x-post-body">
      <div className="col-2 text-end">
        <UserAvatar userAvatarUrl="https://i.pravatar.cc/200" />
      </div>
      <div className="col-10">
        <div className="row">
          <PostTitle
            name={name}
            isPremium={isPremium}
            username={username}
            shareDate={shareDate}
          />
        </div>
        <div className="row">
          <label className="x-post-comment">{comment}</label>
        </div>
        <div className="row mt-2">
          <img className="x-post-img" src={postImageUrl} alt="" />
        </div>
        <div className="row mt-2">
          <div className="col-3">
            <PostIcons postId="1" type="Comment" count={commentCount} />
          </div>
          <div className="col-3">
            <PostIcons postId="1" type="Retweet" count={reteweetCount} />
          </div>
          <div className="col-3">
            <PostIcons postId="1" type="Like" count={likeCount} />
          </div>
          <div className="col-3">
            <PostIcons postId="1" type="Views" count={viewCount} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Post);
