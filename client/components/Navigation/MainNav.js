// React modules
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import LeftMainNav_LoggedIn from './LoggedIn/LeftMainNav';
import RightMainNav_LoggedIn from './LoggedIn/RightMainNav';
import LeftMainNav_LoggedOut from './LoggedOut/LeftMainNav';
import RightMainNav_LoggedOut from './LoggedOut/RightMainNav';

//Scoped styling
import styles from '../../styles/MainNav.module.scss';

const MainMenu = () => {
	const user = useSelector((state) => state.user?.user);
	return (
		<ul className={styles['nav-container']}>
			{user ? (
				// If user is logged in
				<>
					<LeftMainNav_LoggedIn />
					<RightMainNav_LoggedIn />
				</>
			) : (
				// If user is logged out
				<>
					<LeftMainNav_LoggedOut />
					<RightMainNav_LoggedOut />
				</>
			)}
		</ul>
	);
};

export default MainMenu;
