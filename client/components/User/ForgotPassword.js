import React, { useState } from "react";
import { sendResetPassword } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();
	return (
		<div
			className='recover-password'
			style={{
				position: "absolute",
				top: "20%",
				left: "10%",
				height: "50%",
				width: "80%",
				boxShadow: "10px 10px 5px 5px rgba(0, 0, 0, 0.6)",
				border: "1px solid black",
				borderRadius: '5px'
			}}>
			{/* Display a Card that includes recovery instructions */}
			<div
				className='recover-card'
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column"
				}}>
				<div
					className='recover-block'
					style={{
						display: "flex",
						height: "20%",
						width: "80%",
						justifyContent: "center",
						alignItems: "center",
						margin: "0 auto",
					}}>
					<h2
						style={{
							width: "100%",
							height: "50%",
							fontWeight: "bold",
							textAlign: "center",
							fontSize: '24px',
							letterSpacing: "2px",
						}}>
						Recover Password
					</h2>
				</div>
				<div
					className='recover-block'
					style={{
						display: "flex",
						height: "20%",
						width: "80%",
						justifyContent: "center",
						alignItems: "center",
						margin: "0 auto",
					}}>
					<span
						style={{
							width: "100%",
							height: "50%",
							fontSize: "14px",
							fontStyle: "italic",
							textAlign: "center"
						}}>
						Don 't worry, happens to the best of us
					</span>
				</div>
				<div
					className='recover-block'
					style={{
						display: "flex",
						height: "20%",
						width: "80%",
						justifyContent: "center",
						alignItems: "flex-end",
						margin: "0 auto",
					}}>
					<span
						style={{
							width: "100%",
							height: "50%",
							fontSize: "18px",
							fontWeight: "bold",
							textAlign: "center",
							letterSpacing: "2px",
						}}>
						Your email
					</span>
				</div>
				<div
					className='recover-block'
					style={{
						display: "flex",
						height: "20%",
						width: "80%",
						justifyContent: "center",
						alignItems: "center",
						margin: "0 auto",
					}}>
					<input
						type='text'
						name='email'
						style={{
							width: "100%",
							height: "50%",
						}}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					>
					</input>
				</div>
				<div
					className='recover-block'
					style={{
						display: "flex",
						height: "20%",
						width: "80%",
						justifyContent: "center",
						alignItems: "center",
						margin: "0 auto",
					}}>
					<button
						type='submit'
						style={{
							width: "100%",
							height: "60%",
							backgroundColor: "black",
							color: "white",
							fontSize: "12px",
							letterSpacing: "2px",
							borderRadius: '5x',
							cursor: "pointer"
						}}
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
