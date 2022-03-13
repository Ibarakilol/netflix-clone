import { call, put, takeLeading, all } from 'redux-saga/effects'
import { signInUser, signOutUser } from '../firebase/authentication'
import { setAppLoading } from './actions/app'
import { signIn, signOut, authError } from './actions/user'
import { SIGNIN_USER_ASYNC, SIGNOUT_USER_ASYNC } from './types'

function* userSignIn(action) {
  try {
    yield put(setAppLoading(true))
    const { email, password } = action.payload
    const user = yield call(signInUser, email, password)
    yield put(signIn(user))
    yield put(setAppLoading(false))
  } catch(e) {
    yield put(authError(e))
    yield put(setAppLoading(false))
  }
}

function* userSignOut() {
  try {
    yield put(setAppLoading(true))
    yield call(signOutUser)
    yield put(signOut())
    yield put(setAppLoading(false))
  } catch(e) {
    yield put(authError(e))
    yield put(setAppLoading(false))
  }
}

function* watchUserSignIn() {
  yield takeLeading(SIGNIN_USER_ASYNC, userSignIn)
}

function* watchUserSignOut() {
  yield takeLeading(SIGNOUT_USER_ASYNC, userSignOut)
}

export default function* rootSaga() {
  yield all([
    watchUserSignIn(),
    watchUserSignOut()
  ])
}
