import { connect } from 'react-redux'
import { fetchPost } from '../actions/post'
import { fetchComment } from '../actions/comment'
import MainView from '../components/MainView'

const mapStateToProps = state => {
  const { post, comment } = state
  return {
    post,
    comment
  }
}

export default connect(
  mapStateToProps,
  {
    fetchPost,
    fetchComment
  }
)(MainView)
