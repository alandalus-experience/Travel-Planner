// NextJS modules
import Link from 'next/link'

// React modules
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/actions/userActions';

const RightMainNav_LoggedIn = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Link href="/">
        <a onClick={() => dispatch(logoutUser())} style={{"cursor": "pointer"}}>Logout</a>
      </Link>
    </div>
  )
}
  
export default RightMainNav_LoggedIn