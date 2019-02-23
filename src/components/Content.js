import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  padding: 8px 16px;
  margin: 0 auto;
  overflow-y: auto;
`

const TitleWrapper = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Avater = styled.img`
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  color: ${props => props.color || '#fff'};
`

const ProfileWrapper = styled.div`
  border-bottom: solid 1px #555;
  padding-bottom: 4px;
`
const BodyWrapper = styled.div`
  cursor: pointer;
`

const Title = styled.div`
  color: #e5e8ea;
  font-size: 1rem;
`
const ContentWrapper = styled.div`
  margin-top: 88px;
`

export const BoxContent = post => (
  <ContainerWrapper>
    {renderHeader({ id: '', title: 'Fetch Post' })}
    <ProfileWrapper>
      <TitleWrapper>
        {post.id}
        <Avater src="http://placehold.it/50x50" size="50" />
      </TitleWrapper>
      <Title>{post.title}</Title>
    </ProfileWrapper>
    <BodyWrapper onClick={() => post.fetchComment(post.id, post.title)}>
      {post.body}
    </BodyWrapper>
  </ContainerWrapper>
)

export const CommentContent = ({
  commentList,
  relatedPost,
  fetchComment,
  deleteCommentColumn
}) => (
  <ContainerWrapper>
    {renderHeader(relatedPost, deleteCommentColumn)}
    <ContentWrapper>
      {commentList.map((comment, index) => (
        <React.Fragment key={index}>
          <ProfileWrapper>
            <TitleWrapper>
              {comment.id}
              <Avater src="http://placehold.it/50x50" size="50" />
            </TitleWrapper>
            <Title>{comment.name}</Title>
          </ProfileWrapper>
          <BodyWrapper onClick={() => fetchComment(comment.postId, 'Comment')}>
            {comment.body}
          </BodyWrapper>
        </React.Fragment>
      ))}
    </ContentWrapper>
  </ContainerWrapper>
)

const ContentHeader = styled.div`
  /* TODO: Header is Fix header */
  /*position: ${props => (props.comment ? 'absolute' : 'none')};*/
  top: 0;
  background: #dbdb8f;
  color: #111;
  padding: 8px;
  border-radius: 8px;
  margin: 4px 8px;
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
