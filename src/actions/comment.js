export const REQUEST_FETCH_COMMENT = 'REQUEST_FETCH_COMMENT'
export const SUCCESS_FETCH_COMMENT = 'SUCCESS_FETCH_COMMENT'
export const FAILURE_FETCH_COMMENT = 'FAILURE_FETCH_COMMENT'

export const fetchComment = (id, title) => async dispatch => {
  dispatch({ type: REQUEST_FETCH_COMMENT })
  try {
    const comments = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    ).then(response => response.json())

    if (comments) {
      dispatch({
        type: SUCCESS_FETCH_COMMENT,
        data: { relatedPost: { id, title }, comments }
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
