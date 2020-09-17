// NextJS modules
import Head from 'next/head';
import Link from 'next/link';

// React modules
import React from 'react';

// Redux imports
// import { useDispatch } from 'react-redux';
// import { updateEmail } from '../../../redux/actions/userActions';

// Components
import MainNav from '../../../components/Navigation/MainNav';
import { useSelector } from 'react-redux';

function Settings() {
	// const dispatch = useDispatch();
	const user = useSelector((state) => state.user?.user);
	return (
		<>
			<Head>
				<title>Travel Planner - Profile</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<MainNav />
			<Link href="/user/settings">
				<a>Back</a>
			</Link>
			<h1>Profile</h1>
			<div>
				{user.name ? <p>{user.name}</p> : null}
				<p>Email: {user.email}</p>
				<button>Edit</button>
			</div>
			{!user.emailVerified ? (
				<div>
					<p>Your email is not verified!</p>
					<button>Verify</button>
				</div>
			) : null}
		</>
	);
}

export default Settings;
