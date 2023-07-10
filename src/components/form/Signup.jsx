import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [nameError, setNameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [emailError, setEmailError] = useState(false);

	// name
	const nameHandler = e => {
		setName(e.target.value);
	};

	const checkNameHandler = e => {
		if (name.length < 3) {
			setNameError(true);
		} else {
			setNameError(false);
		}
	};

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
		if (emailError && nameError && passwordError) return;
		auth.createUserWithEmailAndPassword(email, password);
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
				<Typography variant="h6" sx={{ fontWeight: 900 }}>
					Sign up for free to start listening music.
				</Typography>

				<Typography
					variant="body1"
					sx={{ fontWeight: 600, margin: "30px 0 10px 0" }}
				>
					Sign up with your email address
				</Typography>

				<TextField
					onBlur={emailValidatorHandler}
					helperText={emailError ? "Email address invalid" : ""}
					value={email}
					onChange={emailHandler}
					error={emailError}
					variant="standard"
					placeholder="Enter your email."
					label="whats your email address?"
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
					placeholder="Create your password."
					label="Create your password"
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
				<TextField
					onBlur={checkNameHandler}
					error={nameError}
					value={name}
					onChange={nameHandler}
					variant="standard"
					placeholder="Enter your profile name."
					label="what should we call you?"
					id="outlined-start-adornment"
					sx={{ m: 1, width: "400px" }}
					helperText={
						nameError
							? "Name cannot be shorter then 3 characters"
							: "This appears on your profile."
					}
					InputProps={{
						startAdornment: <InputAdornment position="start"></InputAdornment>,
					}}
				/>
				<Button
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
					Sign up
				</Button>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography variant="body2">Have an account?</Typography>
					<Link>
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
							Log in.
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default Signup;
