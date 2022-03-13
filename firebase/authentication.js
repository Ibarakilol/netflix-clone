import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './index'

export const signInUser = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  return user
}

export const signOutUser = async () => {
  await signOut(auth)
}
