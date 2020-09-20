// NextJS modules
import Link from 'next/link';
import Router from 'next/router';

// React modules
import React from 'react';

const LeftMainNav_LoggedOut = () => {
	return (
		<div>
			{Router.pathname === '/' ? null : (
				<Link href="/">
					<a>Home</a>
				</Link>
			)}
		</div>
	);
};

export default LeftMainNav_LoggedOut;
