import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [image, setImage] = useState('')
	const [errors, setErrors] = useState([]);
	const [hassubmitted, setHasSubmitted] = useState(false)
	const { closeModal } = useModal();

	useEffect(() =>{
		let errors = []
		if(!email.includes('@')) errors.push('Provide correct email')
		if(username.length<4) errors.push('Username must be more than 4 characters')
		if(password.length<4) errors.push('Password must be more than 4 characters')
		setErrors(errors)
	}, [email,username,password])

	const handleSubmit = async (e) => {
		e.preventDefault();
		setHasSubmitted(true)
		if (password === confirmPassword) {
			// #for image
			const formData = new FormData()
			formData.append('username',username)
			formData.append('email', email)
			formData.append('password',password)
			formData.append('image',image)
			console.log("formdataaaaaa", formData)
			//const data = await dispatch(signUp(username, email, password));
			const data = await dispatch(signUp(formData));
			console.log('from signuppppp', data)
						 await fetch(`/send_email/${email}`)
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
		// setEmail('')
		// setUsername('')s
		// setPassword('')
	};

	return (
		<>
			<h1 className="mainh" >Sign Up</h1>
			<form className="mainform" onSubmit={handleSubmit} encType="multipart/form-data" >
				<ul>
					{hassubmitted && errors.length>0 && errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label>
					Email
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label>
					Username
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				<label>
				Image
				<input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}  >
				</input>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<label>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button  type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignupFormModal;