// NextJS modules
import Head from 'next/head';

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
		</>
	);
}

export default Settings;
