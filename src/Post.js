// @flow
import React from 'react';
import styled from 'styled-components';

type PostType = {
  id: number,
  body: string,
  author: string,
};

type Props = {
  post: PostType,
};

const Wrapper = styled.div`
  border: 1px solid #444;
  padding: 12px;
  margin: 12px;
`;

const CommentsWrapper = styled.div`
  margin-left: 20px;
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
