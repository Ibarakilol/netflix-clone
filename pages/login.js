import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Login.module.css'
import Layout from '../components/layout'
import { SIGNIN_USER_ASYNC } from '../redux/types'

export default function Login() {
  const router = useRouter()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.app.loading)
  const userLoggedIn = useSelector((state) => state.user.userLoggedIn)
  const error = useSelector((state) => state.user.error)
  const email = useRef(null)
  const password = useRef(null)

  useEffect(() => {
    if (userLoggedIn && !loading) router.push('/')
  }, [userLoggedIn, loading])

  const handleLogin = (e) => {
    e.preventDefault()
    const user = { email: email.current.value, password: password.current.value }
    dispatch({ type: SIGNIN_USER_ASYNC, payload: user})
    email.current.value = ''
    password.current.value = ''
  }

  return (
    <Layout>
      <div className={styles.loginPage}>
        <div className="wrapper">
          <div className={styles.loginPage__inner}>
            <div className={styles.loginPage__overlay} />
            <div className={styles.loginPage__signin}>
              <h1 className={styles.loginPage__title}>Sign In</h1>
              <form className={styles.loginPage__form}>
                <input className={styles.loginPage__input} type="email" placeholder="Email" ref={email} defaultValue="netflix-clone@test.com" required />
                <input className={styles.loginPage__input} type="password" placeholder="Password" ref={password} defaultValue="nc12345678" required />
                {error && <p className={styles.loginPage__error}>{error.message}</p>}
                <button className={`btn ${styles.loginPage__btn}`} type="submit" onClick={(e) => handleLogin(e)} disabled={loading}>Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
