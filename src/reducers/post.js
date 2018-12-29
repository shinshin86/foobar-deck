import {
  REQUEST_FETCH_POST,
  SUCCESS_FETCH_POST,
  FAILURE_FETCH_POST
} from '../actions/post'

const initialState = {
  postList: [],
  isFetching: false
}
export default function post(state = initialState, action) {
  switch (action.type) {
    case REQUEST_FETCH_POST:
      return { ...state, isFetching: true }
    case SUCCESS_FETCH_POST:
      return {
        ...state,
        isFetching: false,
        post: action.data
      }
    case FAILURE_FETCH_POST:
      return {
        ...state,
        isFetching: false,
        post: action.error
      }
    default:
      return state
  }
}
