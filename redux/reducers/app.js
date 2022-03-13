import { SET_APP_LOADING } from '../types'

const initialState = {
  loading: false
}

const app = (state = initialState, action) => {
  switch(action.type) {
    case SET_APP_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export default app
