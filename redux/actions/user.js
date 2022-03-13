import { SIGNIN_USER, SIGNOUT_USER, AUTH_REQUEST_FAILED } from '../types'

export const signIn = (user) => ({
  type: SIGNIN_USER,
  payload: user
})

export const signOut = () => ({
  type: SIGNOUT_USER
})

export const authError = (error) => ({
  type: AUTH_REQUEST_FAILED,
  payload: error
})
