import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Profile.module.css'
import { SIGNOUT_USER_ASYNC } from '../redux/types'
import Layout from '../components/layout'

export default function Profile() {
  const router = useRouter()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.app.loading)
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    if (!user && !loading) router.push('/login')
  }, [user, loading])

  const handleSignOut = () => {
    dispatch({ type: SIGNOUT_USER_ASYNC })
  }

  return (
    <Layout>
      <div className={styles.profilePage}>
        <div className="wrapper">
          <div className={styles.profilePage__inner}>
            <h1 className={styles.profilePage__title}>Edit Profile</h1>
            <div className={styles.profilePage__info}>
              <img className={styles.profilePage__avatar} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt={user?.email} />
              <div className={styles.profilePage__details}>
                <h2 className={styles.profilePage__username}>{user?.email}</h2>
                <button className={`btn ${styles.profilePage__signOut}`} onClick={handleSignOut}>Sign Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
