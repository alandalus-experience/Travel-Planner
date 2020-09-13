// NextJS modules
import Link from 'next/link'

// React modules
import React from 'react';

const RightMainNav_LoggedOut = () => {
  return (
    <div>
      <Link href="/user/register">
        <a>Register</a>
      </Link>
      <Link href="/user/login">
        <a>Login</a>
      </Link>
    </div>
  )
}
  
export default RightMainNav_LoggedOut