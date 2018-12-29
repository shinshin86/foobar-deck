import {
  REQUEST_FETCH_COMMENT,
  SUCCESS_FETCH_COMMENT,
  FAILURE_FETCH_COMMENT,
  DELETE_COMMENT_COLUMN
} from '../actions/comment'

const initialState = {
  isFetching: false,
  comments: [],
  error: {}
}
export default function comment(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FETCH_COMMENT:
      return { ...state, isFetching: true }
    case SUCCESS_FETCH_COMMENT:
      return {
        ...state,
        isFetching: false,
        comments: [
          ...state.comments,
          {
            commentList: action.data.comments,
            relatedPost: action.data.relatedPost
          }
        ],
        error: null
      }
    case FAILURE_FETCH_COMMENT:
      return {
        ...state,
        isFetching: false,
        comments: [
          {
            ...state.comments
          }
        ],
        error: action.error
      }
    case DELETE_COMMENT_COLUMN:
      const newCommentList = state.comments.filter(
        ({ relatedPost }) => action.id !== +relatedPost.commentColumnId
      )
      return {
        ...state,
        comments: newCommentList,
        error: null
      }
    default:
      return state
  }
}
