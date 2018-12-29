import React from 'react'
import styled from 'styled-components'
import { BoxContent, CommentContent } from './Content'

const ContentWrapper = styled.div`
  position: absolute;
  width: calc(100% - 50px);
  display: flex;
  height: 100%;
  overflow-y: hidden;
`

const BoxContentWrapper = styled.div`
  max-width: 220px;
  width: 100%;
  height: 100%;
  color: #e1e8ed;
  background: #333;
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
