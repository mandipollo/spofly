import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	Box,
	Typography,
	TextField,
	InputAdornment,
	Button,
} from "@mui/material";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../state/currentUserSlice";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const [passwordError, setPasswordError] = useState(false);
	const [emailError, setEmailError] = useState(false);

	// password
	const passwordHandler = e => {
		setPassword(e.target.value);
	};

	const passwordValidatorHandler = e => {
		if (password.length < 8) {
			setPasswordError(true);
		} else {
			setPasswordError(false);
		}
	};

	// email
	const emailHandler = e => {
		setEmail(e.target.value);
	};

	const emailValidatorHandler = e => {
		if (!email.includes("@")) {
			setEmailError(true);
		} else {
			setEmailError(false);
		}
	};

	const submitHandler = e => {
		e.preventDefault();

		try {
			signInWithEmailAndPassword(auth, email, password)
				.then(userCreditials => {
					console.log(userCreditials.user);
					dispatch(
						setCurrentUser({
							displayName: userCreditials.user.displayName,
							uid: userCreditials.user.uid,
						})
					);
					navigate("/");
				})
				.catch(error => {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Box
					onSubmit={submitHandler}
					component="form"
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						gap: "10px",
						margin: "40px 0",
					}}
				>
					<PauseCircleFilledIcon color="success" fontSize="large" />
					<Typography variant="h6">Musbrary</Typography>
				</Box>
				<Typography variant="h4" sx={{ fontWeight: 900, margin: 4 }}>
					Log in musbrary account.
				</Typography>

				<TextField
					onBlur={emailValidatorHandler}
					helperText={emailError ? "Email address invalid" : ""}
					value={email}
					onChange={emailHandler}
					error={emailError}
					variant="standard"
					placeholder="Enter your email."
					label="Email address"
					id="outlined-start-adornment"
					sx={{ m: 1, width: "400px" }}
					InputProps={{
						startAdornment: <InputAdornment position="start"></InputAdornment>,
					}}
				/>
				<TextField
					onBlur={passwordValidatorHandler}
					value={password}
					onChange={passwordHandler}
					error={passwordError}
					type="password"
					variant="standard"
					placeholder="Password"
					label="Password"
					id="outlined-start-adornment"
					sx={{ m: 1, width: "400px" }}
					helperText={
						passwordError ? "Password needs to be atleast 8 character long" : ""
					}
					InputProps={{
						startAdornment: <InputAdornment position="start"></InputAdornment>,
						endAdornment: (
							<InputAdornment position="end">
								<VisibilityOffIcon />
							</InputAdornment>
						),
					}}
				/>
				<Button
					onClick={submitHandler}
					variant="outlined"
					sx={{
						margin: "20px",
						color: "black",
						borderRadius: "1rem",
						width: "150px",
						height: "50px",
						backgroundColor: "#1AD760",
						border: "none",
						"&:hover": {
							backgroundColor: "#1AD760",
							border: "none",
							textDecoration: "underline",
						},
					}}
				>
					Log in
				</Button>
				<Button
					variant="text"
					sx={{
						color: "black",
						textDecoration: "underline",

						"&:hover": {
							color: "#1AD760",
							backgroundColor: "inherit",
							border: "none",
							textDecoration: "underline",
						},
					}}
				>
					Forgot your password?
				</Button>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography variant="body2">Don't have an account?</Typography>
					<Link to="/signup">
						<Button
							sx={{
								color: "#1AD760",
								textDecoration: "underline",
								"&:hover": {
									backgroundColor: "inherit",
									border: "none",
									textDecoration: "underline",
								},
							}}
						>
							Sign up
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default Login;
