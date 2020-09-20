// NextJS modules
import Link from 'next/link';
import { useRouter } from 'next/router';

// React modules
import React from 'react';

const LeftMainNav_LoggedOut = () => {
	const router = useRouter();
	return (
		<div>
			{router.pathname === '/' ? (
				<></>
			) : (
				<Link href="/">
					<a>Home</a>
				</Link>
			)}
		</div>
	);
};

export default LeftMainNav_LoggedOut;
