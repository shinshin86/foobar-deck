export const REQUEST_FETCH_COMMENT = 'REQUEST_FETCH_COMMENT'
export const SUCCESS_FETCH_COMMENT = 'SUCCESS_FETCH_COMMENT'
export const FAILURE_FETCH_COMMENT = 'FAILURE_FETCH_COMMENT'
export const DELETE_COMMENT_COLUMN = 'DELETE_COMMENT_COLUMN'

let commentColumnId = 0

export const fetchComment = (id, title) => async dispatch => {
  dispatch({ type: REQUEST_FETCH_COMMENT })
  try {
    const comments = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    ).then(response => response.json())

    if (comments) {
      ++commentColumnId
      dispatch({
        type: SUCCESS_FETCH_COMMENT,
        data: { relatedPost: { id, title, commentColumnId }, comments }
      })
      return
    }
    dispatch({
      type: FAILURE_FETCH_COMMENT,
      error: { message: 'fetch comment error' }
    })
    return
  } catch (error) {
    dispatch({ type: FAILURE_FETCH_COMMENT, error })
  }
}

export const deleteCommentColumn = id => async dispatch => {
  dispatch({ type: DELETE_COMMENT_COLUMN, id })
}
