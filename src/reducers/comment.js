import {
  REQUEST_FETCH_COMMENT,
  SUCCESS_FETCH_COMMENT,
  FAILURE_FETCH_COMMENT
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
    default:
      return state
  }
}
