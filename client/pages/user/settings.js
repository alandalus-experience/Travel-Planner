// NextJS modules
import Head from 'next/head';
import Link from 'next/link';

// React modules
import React from 'react';

// Components
import MainNav from '../../components/Navigation/MainNav';

function Settings() {
	return (
		<>
			<Head>
				<title>Travel Planner - Settings</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<MainNav />
			<Link href="/user/settings/profile">
				<a>Profile</a>
			</Link>
		</>
	);
}

export default Settings;
