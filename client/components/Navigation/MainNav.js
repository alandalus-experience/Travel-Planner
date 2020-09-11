// NextJS modules
import Link from 'next/link'

// React modules
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';

//Scoped stylings
import styles from '../../styles/MainNav.module.scss'

const MainMenu = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  return (
    <ul className={styles["nav-container"]}>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        {
          user ? (
            <span
              onClick={() => dispatch(logoutUser())}
              style={{"cursor": "pointer"}}
            >
              Logout
            </span>
          ) : (
            <Link href="/user/login">
              <a>Login</a>
            </Link>
          )
        }
      </div>
    </ul>
  )
}

export default MainMenu;