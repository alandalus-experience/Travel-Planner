// NextJS modules
import Link from 'next/link'

// React modules
import React from 'react'

//Scoped stylings
import styles from '../../styles/MainNav.module.scss'

function MainMenu () {
  return (
    <ul className={styles["nav-container"]}>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/register">
          <a>Register</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    </ul>
  )
}

export default MainMenu