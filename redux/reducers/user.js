import { SIGNIN_USER, SIGNOUT_USER, AUTH_REQUEST_FAILED } from '../types'

const initialState = {
  user: null,
  userLoggedIn: false,
  error: null
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case SIGNIN_USER:
      return { ...state, user: action.payload, userLoggedIn: true, error: null }
    case SIGNOUT_USER:
      return { ...state, user: null, userLoggedIn: false, error: null }
    case AUTH_REQUEST_FAILED:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default user
