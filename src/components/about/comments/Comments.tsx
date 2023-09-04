import { CommentContainer, CommentsWrapper } from "./CommentStyles";

const Comments = () => {
  return (
    <CommentsWrapper>
      <p style={{ fontSize: "80px" }}>What our clients say</p>
      <CommentContainer>
        <p>What our clients say</p>
      </CommentContainer>
    </CommentsWrapper>
  );
};

export default Comments;
