import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  padding: 8px 16px;
  margin: 0 auto;
  overflow-y: auto;
  border-top: 1px solid #8e6cab;
  cursor: pointer;
`

const TitleWrapper = styled.div`
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Avater = styled.img`
  border-radius: 50%;
  border: 2px solid #dbdb8f;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`

const ProfileWrapper = styled.div`
  border-bottom: solid 1px #555;
  padding-bottom: 4px;
`

const Title = styled.div`
  color: #e5e8ea;
  font-size: 1rem;
`
const ContentWrapper = styled.div`
  margin-top: 88px;
  padding: 8px;
`

const CommentWrapper = styled.div`
  margin: 0 auto;
  border-top: 1px solid #8e6cab;
  cursor: pointer;
`
export const BoxContent = post => (
  <ContainerWrapper onClick={() => post.fetchComment(post.id, post.title)}>
    <ProfileWrapper>
      <TitleWrapper>
        {post.id}
        <Avater src="/foobardeck.png" size="50" />
      </TitleWrapper>
      <Title>{post.title}</Title>
    </ProfileWrapper>
    <div>{post.body}</div>
  </ContainerWrapper>
)

export const CommentContent = ({
  commentList,
  relatedPost,
  fetchComment,
  deleteCommentColumn
}) => (
  <CommentWrapper>
    {renderHeader(relatedPost, deleteCommentColumn)}
    <ContentWrapper>
      {commentList.map((comment, index) => (
        <React.Fragment key={index}>
          <ProfileWrapper>
            <TitleWrapper>
              {comment.id}
              <Avater src="/foobardeck.png" size="50" />
            </TitleWrapper>
            <Title>{comment.name}</Title>
          </ProfileWrapper>
          <div onClick={() => fetchComment(comment.postId, 'Comment')}>
            {comment.body}
          </div>
        </React.Fragment>
      ))}
    </ContentWrapper>
  </CommentWrapper>
)

const ContentHeader = styled.div`
  position: sticky;
  top: 0;
  border: 2px solid #8e6cab;
  background: #05022b;
  color: #e5e8ea;
  padding: 16px;
`
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const renderHeader = (relatedPost, deleteCommentColumn) => (
  <ContentHeader comment={!!relatedPost.commentColumnId}>
    <FlexBox>
      <div>
        ID:
        {relatedPost.id}
      </div>
      {deleteCommentColumn && (
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => deleteCommentColumn(relatedPost.commentColumnId)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </FlexBox>
    <div>
      TITLE:
      {relatedPost.title}
    </div>
  </ContentHeader>
)
