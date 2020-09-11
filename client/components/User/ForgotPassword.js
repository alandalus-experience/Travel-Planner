import React, { useState } from "react";
import { sendResetPassword } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

import styles from '../../styles/ForgotPassword.module.scss'

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();
	return (

		<div className={styles['recover-password']}>
			{/* Display a Card that includes recovery instructions */}
			<div className={styles['recover-card']}>
				<div className={styles['recover-block']}>
					<h2 className={styles['recover-title']}>
						Recover Password
					</h2>
				</div>
				<div className={styles['recover-block']}>
					<span className={styles['recover-message']}>
						Don 't worry, happens to the best of us
					</span>
				</div>
				<div className={styles['recover-block']}>
					<span className={styles['recover-text']}>
						Your email
					</span>
				</div>
				<div className={styles['recover-block']}>
					<input
						type='text'
						name='email'
						className={styles['recover-input']}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					>
					</input>
				</div>
				<div className={styles['recover-block']}>
					<button
						type='submit'
						className={styles['recover-btn']}
						onClick={() => dispatch(sendResetPassword(email))}
					>
						Email me a recovery link
					</button>
				</div>
			</div>
		</div>
	)
};

export default ForgotPassword;
