export const REQUEST_FETCH_POST = 'REQUEST_FETCH_POST'
export const SUCCESS_FETCH_POST = 'SUCCESS_FETCH_POST'
export const FAILURE_FETCH_POST = 'FAILURE_FETCH_POST'

export const fetchPost = () => async dispatch => {
  dispatch({ type: REQUEST_FETCH_POST })

  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    ).then(response => response.json())

    if (response) {
      dispatch({ type: SUCCESS_FETCH_POST, data: response })
      return
    }

    dispatch({
      type: FAILURE_FETCH_POST,
      error: { message: 'Not found posts' }
    })
    return
  } catch (error) {
    dispatch({ type: FAILURE_FETCH_POST, error })
  }
}
