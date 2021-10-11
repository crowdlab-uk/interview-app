// @flow
import React from "react";
import styled from "styled-components";

type PostType = {
  id: number,
  body: string,
  author: string
};

type Props = {
  post: PostType
};

const Wrapper = styled.div`
border: 1px solid #444;
border-radius: 8px;
border-color: black;
color: black;
padding: 12px;
margin: 15px 8px;
box-shadow: 5px 10px 10px #888;
`;

const CommentsWrapper = styled.div`
  margin-left: 20px;
  border: .5px solid black;
  margin: 10px;
  padding: 10px;
  border-radius: 8px
`;




function Post({ post }: Props) {
  return (
    <Wrapper>
      <h3>{post.author}</h3>
      <p>{post.body}</p>
      <CommentsWrapper>
        <h5>Comments</h5>
        <p>TODO: Fetch comments</p>
      </CommentsWrapper>
    </Wrapper>
  );
}

export default Post;
