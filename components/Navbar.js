import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [show, setShow] = useState(false)
  const user = useSelector((state) => state.user.user)

  const transitionNavbar = () => {
    window.scrollY > 80 ? setShow(true) : setShow(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', transitionNavbar)
    return () => document.removeEventListener('scroll', transitionNavbar)
  }, [])

  return (
    <div className={`${styles.nav} ${show ? styles['nav--black'] : ''}`}>
      <div className={styles.nav__inner}>
        <Link href="/">
          <img className={styles.nav__logo} src="assets/images/netflix-logo.svg" alt="Netflix" />
        </Link>
        {user && <Link href="/profile">
          <img className={styles.nav__avatar} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt={user.email} />
        </Link>}
      </div>
    </div>
  )
}
