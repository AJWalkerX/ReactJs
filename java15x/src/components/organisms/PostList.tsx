import React from "react";
import Post from "../molecules/Post";
function PostList() {
  return (
    <div className="row">
      <Post
        postImageUrl="https://i.pravatar.cc/200"
        name="Alex"
        username="Alex1"
        userAvatar="https://i.pravatar.cc/200"
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. totam quas dolore excepturi sint nesciunt."
        shareDate="1 saat önce"
        commentCount={12}
        reteweetCount={12}
        likeCount={12}
        viewCount={12}
        isPremium={true}
        userId="1"
        postId="1"
      />
      <Post
        postImageUrl="https://picsum.photos/200/200"
        name="Alex"
        username="Alex1"
        userAvatar="https://i.pravatar.cc/200"
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. totam quas dolore excepturi sint nesciunt."
        shareDate="1 saat önce"
        commentCount={12}
        reteweetCount={12}
        likeCount={12}
        viewCount={12}
        isPremium={true}
        userId="1"
        postId="1"
      />
    </div>
  );
}

export default PostList;
