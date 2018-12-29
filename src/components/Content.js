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
  color: #e1e8ed;
  font-size: 1rem;
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

export const CommentContent = ({ commentList, relatedPost, fetchComment }) => (
  <ContainerWrapper>
    {renderHeader(relatedPost)}
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
  </ContainerWrapper>
)

const ContentHeader = styled.div`
  padding: 8px;
`

const renderHeader = relatedPost => (
  <ContentHeader>
    <p>
      ID:
      {relatedPost.id}
    </p>
    <p>
      TITLE:
      {relatedPost.title}
    </p>
  </ContentHeader>
)
