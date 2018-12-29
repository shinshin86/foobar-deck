import React from 'react'
import styled from 'styled-components'
import { BoxContent, CommentContent } from './Content'

const ContentWrapper = styled.div`
  position: absolute;
  left: 8px;
  width: calc(100% - 16px);
  display: flex;
  height: 100%;
  overflow-y: hidden;
  color: #9f9cc1;
  background: #454075;
  border-radius: 4px;
`

const BoxContentWrapper = styled.div`
  height: 100%;
  color: #9f9cc1;
  background: #05022b;
  overflow-y: auto;
`

export default class MainView extends React.Component {
  componentDidMount() {
    this.props.fetchPost()
  }

  render() {
    if (this.props.post.isFetching || !this.props.post.post)
      return <div>loading...</div>

    const { post, comment } = this.props
    const { comments } = comment
    return (
      <ContentWrapper>
        <BoxContentWrapper>
          {post.post.map((p, index) => (
            <BoxContent
              {...p}
              fetchComment={this.props.fetchComment}
              key={index}
            />
          ))}
        </BoxContentWrapper>
        {comments.length !== 0 &&
          comments.map((comment, listIndex) => (
            <BoxContentWrapper key={listIndex}>
              <CommentContent
                {...comment}
                fetchComment={this.props.fetchComment}
                deleteCommentColumn={this.props.deleteCommentColumn}
                key={listIndex}
              />
            </BoxContentWrapper>
          ))}
      </ContentWrapper>
    )
  }
}
