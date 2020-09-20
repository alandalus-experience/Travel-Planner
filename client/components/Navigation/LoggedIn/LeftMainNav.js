// NextJS modules
import Link from 'next/link';
import { useRouter } from 'next/router';

// React modules
import React from 'react';

const LeftMainNav_LoggedIn = () => {
	const router = useRouter();
	return (
		<div>
			{router.pathname === '/dashboard' ? (
				<Link href="/">
					<a>Home</a>
				</Link>
			) : (
				<Link href="/dashboard" style={{ cursor: 'pointer' }}>
					<a>Dashboard</a>
				</Link>
			)}
		</div>
	);
};

export default LeftMainNav_LoggedIn;
