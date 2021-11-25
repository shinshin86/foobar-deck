import React from 'react'
import styled from 'styled-components'
import { BoxContent, CommentContent } from './Content'

const ContentWrapper = styled.div`
  width: calc(100% - 16px);
  display: flex;
  height: 100%;
  color: #9f9cc1;
  background: #454075
  overflow-y: scroll;
  height: 100vh;
};
`

const BoxContentWrapper = styled.div`
  width: calc(100% / 4);
  height: 100%;
  color: #9f9cc1;
  background: #05022b;
  overflow-y: auto;
  display: inline-block;
  border: 1px solid #dbdb8f;
  border-radius: 4px;
`

const ContentHeader = styled.div`
  position: sticky;
  top: 0;
  border: 2px solid #8e6cab;
  background: #05022b;
  color: #e5e8ea;
  padding: 16px;
`

const renderHeader = () => (
  <ContentHeader>
    <div>First Panel</div>
  </ContentHeader>
)

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
          {renderHeader()}
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
